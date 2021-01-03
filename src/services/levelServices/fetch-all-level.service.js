const MakeFetchAllLevel = ({ levelDao }) => {
  const fetchAllLevel = async () => {

    // fetch all Level data
    const allLevel = await levelDao.fetchAll();

    // return the Level data
    return allLevel;
  }

  return fetchAllLevel;
}

module.exports = MakeFetchAllLevel;