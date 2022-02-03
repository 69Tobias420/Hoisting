const additionalData = [19, 46, 14, 16, 76, 40, 29]
const ageLists = [15, 24, 46, 12, 35, 72, 47, 83, 36, 76, ...additionalData]

function addAgesTogether(additionPara) {
  let agesAddedTogether = 0;
  for (let i = 0; i < additionPara.length; i++) {
    agesAddedTogether += additionPara[i]
    console.log(agesAddedTogether)
  }
  return
}
addAgesTogether(ageLists)