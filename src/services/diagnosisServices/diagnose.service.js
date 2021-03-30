const diagnosisService = require(".");

const MakeDiagnosis = ({ fs, brain, dataset, neatCsv, csv }) => {

  const diagnosis = async (symptomData) => {
    try {
      console.log('got here');
      // remove the user id from the symptom dataset
      delete symptomData.userUuid;
      
      // define the number of neural network layers
      const neuralNet = new brain.NeuralNetwork({ hiddenLayers: [3] });

      // spool the dataset
      const spoolData = await fs.readFileSync(dataset);
      if (!spoolData) throw new Error("fs read error: can not read dataset."); 
      const rawData = await neatCsv(spoolData);
      console.log(rawData);
      console.log("got here");

      // fomart the raw data
      let fomartedData = [];
      let referenceObj = [];
      let newObj = {};
      let diseaseName = '';
      rawData.map(data => {
        if (data.Disease === 'Disease') {
          referenceObj.push(data);
        }
        if (data.Disease !== 'Disease') {
          Object.entries(data).map((key) => {
            if (key[0] === 'Disease') {
              newObj = {}
              newObj.symptoms = {};
              newObj.Disease = {};
              newObj.Disease[key[1]] = 1
              diseaseName = key[1];
            }
            //console.log(data.Disease, diseaseName);
            if (data.Disease === diseaseName) {
              if(key[0] !== 'Disease') newObj.symptoms[key[0]] = parseFloat(key[1]);
            }
          })
        }
        if(Object.keys(newObj).length !== 0) fomartedData.push(newObj);
      })
      console.log(fomartedData);
      console.log(referenceObj);
      
      // Organise training data
      const trainingData = fomartedData.map(data => ({ input: data.symptoms, output: data.Disease }))
      console.log(trainingData);

      // Train model with trainingData 
      const trainingStatistics =  neuralNet.train(trainingData, {iterations: 2000});
      console.log(`Training successfull:[statisitcs] =>`, trainingStatistics);

      
      // const newDataSet = {
      //   SYM00001:0.75,
      //   SYM00002:0.75,
      //   SYM00003:0.75,
      //   SYM00004:1.00,
      //   SYM00005:0.75,
      //   SYM00006:1.00,
      //   SYM00007:1.00,
      //   SYM00008:0.75,
      //   SYM00009:0.75,
      //   SYM00011:1.00,
      //   SYM00019:1.00,
      //   SYM00022:0.75
      // }

      // Run current diagnosis
      console.log(symptomData);
      const DiagnosisOutput = neuralNet.run(symptomData);
      console.log(DiagnosisOutput);
      console.log(`Diagnosis successfull:[result] =>`, DiagnosisOutput)

      return DiagnosisOutput;
    } catch (error) {
      console.log(error);
    }
  }

  return diagnosis;
}

module.exports = MakeDiagnosis;