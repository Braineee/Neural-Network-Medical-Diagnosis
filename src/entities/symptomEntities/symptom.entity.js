// Factory function make guest
const BuildMakeSymptom = ({ getUuid, validateCreateSymptomData, validateUpdateSymptomData }) => {
  return class MakeSymptom {
    constructor(currentSymptomData = {}, updatedSymptomData = {}) {
      this._getUuid = getUuid;
      this._currentSymptomData = currentSymptomData;
      this._updatedSymptomData = updatedSymptomData;
      this._validateCreateSymptomData = validateCreateSymptomData;
      this._validateUpdateSymptomData = validateUpdateSymptomData;
    }

    async _validateNewSymptom() {
      await this._validateCreateSymptomData(this._currentSymptomData);
    }

    async _validateUpdateSymptom() {
      return "Not implemented";
      // await this._validateUpdateSymptomData(this._updatedSymptomData);
    }

    async _generateSymptomUuid() {
      this._currentSymptomData.symptomUuid = await this._getUuid();
    }

    getSymptomUuid() {
      return this._currentSymptomData.symptomUuid;
    }

    getSymptomId() {
      return this._currentSymptomData.symptomId;
    }

    getSymptomName() {
      return this._currentSymptomData.symptomName;
    }

    getSymptomDescription() {
      return this._currentSymptomData.symptomDescription;
    }

    updateSymptomId() {
      if (!this._updatedSymptomData.symptomId) return this._currentSymptomData.symptom_id;
      if (this._updatedSymptomData.symptomId !== this._currentSymptomData.symptom_id) return this._updatedSymptomData.symptomId;
      return this._currentSymptomData.symptom_id;
    }

    updateSymptomName() {
      if (!this._updatedSymptomData.symptomName) return this._currentSymptomData.symptom_name;
      if (this._updatedSymptomData.symptomName !== this._currentSymptomData.symptom_name) return this._updatedSymptomData.symptomName;
      return this._currentSymptomData.symptom_name;
    }

    updateSymptomDescription() {
      if (!this._updatedSymptomData.symptomDescription) return this._currentSymptomData.symptom_description;
      if (this._updatedSymptomData._d !== this._currentSymptomData.symptom_description) return this._updatedSymptomData.symptomDescription;
      return this._currentSymptomData.symptom_description;
    }

    async create(){
      await this._validateNewSymptom();
      await this._generateSymptomUuid();
      
      Object.freeze(this._currentSymptomData);

      return this;
    }

    async update(){
      await this._validateUpdateSymptom();
      
      Object.freeze(this._currentSymptomData);
      Object.freeze(this._updatedSymptomData);

      return this;
    }
  }
}



module.exports = BuildMakeSymptom;