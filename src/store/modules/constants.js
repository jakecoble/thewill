import shortid from 'shortid'

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@')

// We're going to import these eventually. Make sure they're unique strings.
function prependGUIDs (idObj) {
  Object.keys(idObj)
    .forEach(key => {
      idObj[key] = shortid.generate() + '_' + idObj[key]
    })

  return idObj
}

export var ModIds = prependGUIDs({
  MEDICATED: 'MEDICATED',
  TIRED: 'TIRED',
  HUNGRY: 'HUNGRY',
  INFECTION: 'INFECTION',
  BAD_INFECTION: 'BAD_INFECTION'
})

export var ModTypes = prependGUIDs({
  DEFAULT: 'DEFAULT',
  DISEASE: 'DISEASE'
})

export var TaskIds = prependGUIDs({
  VISIT_DOCTOR: 'VISIT_DOCTOR',
  EAT_CANNED_FOOD: 'EAT_CANNED_FOOD',
  VISIT_THERAPIST: 'VISIT_THERAPIST'
})

export var EffectTypes = prependGUIDs({
  ADD_MOD: 'ADD_MOD',
  REMOVE_MOD: 'REMOVE_MOD',
  REVEAL_MOD: 'REVEAL_MOD'
})
