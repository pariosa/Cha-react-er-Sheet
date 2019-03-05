import {
  UPDATE_SKILL_IS_CLASS,
  UPDATE_SKILL_RANK,
  UPDATE_SKILL_DESCRIPTION,
  UPDATE_SKILL_MISC_MOD
} from "../constants/actionTypes"; 
const initialState = 
  [
    {
      id: 0,
      isClass: true,
      title: "Acrobatics",
      stat: "dexterity",
      ranks: 2,
      miscMod: 1
    },
    {
      id: 1,
      isClass: true,
      title: "Appraise",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 2,
      isClass: true,
      title: "Bluff",
      stat: "charisma",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 3,
      isClass: false,
      title: "Climb",
      stat: "strength",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 4,
      isClass: false,
      title: "Craft",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0,
      skillDescription: "weapon"
    },
    {
      id: 5,
      isClass: false,
      title: "Craft",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0,
      skillDescription: "ammunition"
    },
    {
      id: 6,
      isClass: false,
      title: "Craft",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0,
      skillDescription: ""
    },
    {
      id: 7,
      isClass: false,
      title: "Diplomacy",
      stat: "charisma",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 8,
      isClass: false,
      title: "Disable Device",
      stat: "dexterity",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 9,
      isClass: false,
      title: "Disguise",
      stat: "charisma",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 10,
      isClass: false,
      title: "Escape Artist",
      stat: "dexterity",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 11,
      isClass: false,
      title: "Fly",
      stat: "dexterity",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 12,
      isClass: false,
      title: "Intimidate",
      stat: "charisma",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 13,
      isClass: false,
      title: "Knowledge (Arcana)",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 14,
      isClass: false,
      title: "Knowledge (Dungeonerering)",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 15,
      isClass: false,
      title: "Knowledge (Engineering)",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 16,
      isClass: false,
      title: "Knowledge (Geography)",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 17,
      isClass: false,
      title: "Knowledge (History)",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 18,
      isClass: false,
      title: "Knowledge (Local)",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 19,
      isClass: false,
      title: "Knowledge (Nature)",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 20,
      isClass: false,
      title: "Knowledge (Nobility)",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 21,
      isClass: false,
      title: "Knowledge (Planes)",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 22,
      isClass: false,
      title: "Knowledge (Religion)",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 23,
      isClass: false,
      title: "Linguistics",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 24,
      isClass: false,
      title: "Perception",
      stat: "wisdom",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 25,
      isClass: false,
      title: "Perform",
      stat: "charisma",
      ranks: 0,
      miscMod: 0,
      skillDescription: ""
    },
    {
      id: 26,
      isClass: false,
      title: "Perform",
      stat: "charisma",
      ranks: 0,
      miscMod: 0,
      skillDescription: ""
    },
    {
      id: 27,
      isClass: false,
      title: "Profession",
      stat: "wisdom",
      ranks: 0,
      miscMod: 0,
      skillDescription: "hunting"
    },
    {
      id: 28,
      isClass: false,
      title: "Profession",
      stat: "wisdom",
      ranks: 0,
      miscMod: 0,
      skillDescription: "fishing"
    },
    {
      id: 29,
      isClass: false,
      title: "Ride",
      stat: "dexterity",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 30,
      isClass: false,
      title: "Sense Motive",
      stat: "wisdom",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 31,
      isClass: false,
      title: "Sleight of Hand",
      stat: "dexterity",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 32,
      isClass: false,
      title: "Spellcraft",
      stat: "intelligence",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 33,
      isClass: false,
      title: "Stealth",
      stat: "dexterity",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 34,
      isClass: false,
      title: "Survival",
      stat: "wisdom",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 35,
      isClass: false,
      title: "Swim",
      stat: "strength",
      ranks: 0,
      miscMod: 0
    },
    {
      id: 36,
      isClass: false,
      title: "Use Magic Device",
      stat: "charisma",
      ranks: 0,
      miscMod: 0
    }
  ] 
const skillReducer = (state = initialState, action) => { 
  switch (action.type) {  
    case UPDATE_SKILL_RANK: 
      const skillIndex = state.indexOf(skillInState);
      let skillInState = state.find(
        skill => skill.id === parseInt(action.payload.nativeEvent.path[1].id)
      );
      skillInState.ranks = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === skillInState.id ? skillInState : item
          )
      ]
      break;
    case UPDATE_SKILL_MISC_MOD: 
      const skillInStateMiscMod = state.find(
        skill => skill.id === parseInt(action.payload.nativeEvent.path[1].id)
      );
      const skillIndexMiscMod = state.indexOf(skillInStateMiscMod);
      skillInStateMiscMod.miscMod = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === skillInStateMiscMod.id ? skillInStateMiscMod : item
        )
      ]
      break;
    case UPDATE_SKILL_DESCRIPTION: 
      const skillInStateDescription = state.find(
        skill => skill.id === parseInt(action.payload.nativeEvent.path[2].id)
      );
      const skillIndexDescription = state.indexOf(
        skillInStateDescription
      );
      skillInStateDescription.skillDescription = action.payload.target.value;
      return [
        ...state.map((item, index) =>
            index === skillInStateDescription.id
              ? skillInStateDescription
              : item
        )
      ];
      break;
    case UPDATE_SKILL_IS_CLASS: 
      const skillInStateIsClass = state.find(
        skill => skill.id === parseInt(action.payload.nativeEvent.path[1].id)
      );
      const skillIndexIsClass = state.indexOf(
        skillInStateIsClass
      ); 
      skillInStateIsClass.isClass = action.payload.target.checked;
      return [
        ...state.map((item, index) =>
            index === skillInStateIsClass.id
              ? skillInStateIsClass
              : item
        )
      ]
    default:
      return state;
  }
}
export default skillReducer;