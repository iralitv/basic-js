module.exports = function createDreamTeam(members) {
  if ( !Array.isArray(members) ) return false;

  const teamTitle = members.filter(Boolean).map(item => {
    if(typeof item === 'string') {
      const itemTrim = item.trim();
      return itemTrim[0].toUpperCase()
    }
  });

  return [...teamTitle].sort().join('')
};