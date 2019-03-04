import {
  ADD_ARTICLE,
  INCREMENT,
  DECREMENT,
  UPDATE_NAME,
  UPDATE_ALIGNMENT,
  UPDATE_PLAYER_NAME,
  UPDATE_CLASS,
  UPDATE_LEVEL,
  UPDATE_DIETY,
  UPDATE_HOMELAND,
  UPDATE_RACE,
  UPDATE_SIZE,
  UPDATE_GENDER,
  UPDATE_AGE,
  UPDATE_HEIGHT,
  UPDATE_WEIGHT,
  UPDATE_HAIR,
  UPDATE_EYES
} from "../constants/actionTypes";
import {
  UPDATE_MAX_HP,
  UPDATE_CURRENT_HP,
  UPDATE_NONLETHAL,
  UPDATE_DR,
  UPDATE_INITIATIVE_MOD
} from "../constants/actionTypes";
import {
  INCREMENT_STR,
  INCREMENT_DEX,
  INCREMENT_CON,
  INCREMENT_INT,
  INCREMENT_WIS,
  INCREMENT_CHA,
  DECREMENT_STR,
  DECREMENT_DEX,
  DECREMENT_CON,
  DECREMENT_INT,
  DECREMENT_WIS,
  DECREMENT_CHA,
  INCREMENT_STR_TEMP,
  INCREMENT_DEX_TEMP,
  INCREMENT_CON_TEMP,
  INCREMENT_INT_TEMP,
  INCREMENT_WIS_TEMP,
  INCREMENT_CHA_TEMP,
  DECREMENT_STR_TEMP,
  DECREMENT_DEX_TEMP,
  DECREMENT_CON_TEMP,
  DECREMENT_INT_TEMP,
  DECREMENT_WIS_TEMP,
  DECREMENT_CHA_TEMP
} from "../constants/actionTypes";
import {
  UPDATE_SKILL_IS_CLASS,
  UPDATE_SKILL_RANK,
  UPDATE_SKILL_DESCRIPTION,
  UPDATE_SKILL_MISC_MOD
} from "../constants/actionTypes"; 

import {
  UPDATE_BASE_SPEED,
  UPDATE_BASE_SPEED_ARMORED,
  UPDATE_FLY_SPEED,
  UPDATE_FLY_MANEUVERABILITY,
  UPDATE_SWIM_SPEED,
  UPDATE_CLIMB_SPEED,
  UPDATE_BURROW_SPEED,
} from "../constants/actionTypes";

import {
  UPDATE_ARMOR_BONUS,
  UPDATE_SHIELD_BONUS,
  UPDATE_SIZE_MODIFIER,
  UPDATE_NATURAL_ARMOR,
  UPDATE_DEFLECTION_MODIFIER,
  UPDATE_ARMOR_MISC_MODIFIER,
  UPDATE_TOUCH_ARMOR_CLASS,
  UPDATE_FLAT_FOOTED_ARMOR_CLASS,
  UPDATE_AC_MODIFIERS_FIELD,
} from "../constants/actionTypes";

import { 
  UPDATE_BASE_SAVE,
  UPDATE_MAGIC_SAVE_MODIFIER,
  UPDATE_MISC_SAVE_MODIFIER,
  UPDATE_TEMP_SAVE_MODIFIER,
} from "../constants/actionTypes";

import {
  UPDATE_BASE_ATTACK_BONUS,
  UPDATE_SPELL_RESISTANCE,
} from "../constants/actionTypes";

import {
  UPDATE_CMB_SIZE_MODIFIER,
  UPDATE_CMB_MODIFIERS_FIELD,
  UPDATE_CMD_SIZE_MODIFIER,
} from "../constants/actionTypes";

import {
  UPDATE_WEAPON_NAME,
  UPDATE_WEAPON_ATTACK_BONUS,
  UPDATE_WEAPON_CRITICAL,
  UPDATE_WEAPON_TYPE,
  UPDATE_WEAPON_RANGE,
  UPDATE_WEAPON_AMMUNITION,
  UPDATE_WEAPON_DAMAGE,
} from "../constants/actionTypes";

const initialState = {
  articles: [],
  count: 0,
  character: {
    stats: {
      intelligence: 10,
      intMod: 0,
      dexterity: 10,
      dexMod: 0,
      strength: 10,
      strMod: 0,
      dexterity: 10,
      dexMod: 0,
      wisdom: 10,
      wisMod: 0,
      charisma: 10,
      chaMod: 0,
      constitution: 10,
      conMod: 0
    },
    statsTemporary: {
      intelligence: 10,
      intMod: 0,
      dexterity: 10,
      dexMod: 0,
      strength: 10,
      strMod: 0,
      dexterity: 10,
      dexMod: 0,
      wisdom: 10,
      wisMod: 0,
      charisma: 10,
      chaMod: 0,
      constitution: 10,
      conMod: 0
    },
    health: {
      current: 24,
      max: 35,
      DR: "4 - fire",
      nonLethal: "none"
    },
    skills: [
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
    ],
    saves: [
      {
      	id:0,
      	save:"Fortitude",
      	stat:"constitution",
      	base:1,
      	magicMod:0,
      	miscMod:0,
      	tempMod:0,
      },
      {      	
      	id:1,
      	save:"Reflex",
      	stat:"dexterity",
      	base:1,
      	magicMod:0,
      	miscMod:0,
      	tempMod:0,
      },
      {      	
      	id:2,
      	save:"Will",
      	stat:"wisdom",
      	base:1,
      	magicMod:0,
      	miscMod:0,
      	tempMod:0,
      }
    ],
    speed:{
      baseSpeed:"25ft",
      baseSpeedArmored:"",
      flySpeed:"",
      flyManeuverability:"",
      swimSpeed:"",
      climbSpeed:"10ft",
      burrowSpeed:""
    },
    armor:{
      armorBonus:"",
      shieldBonus:"",
      sizeModifier:"",
      naturalArmor:"",
      deflectionModifier:"",
      armorMiscModifier:"",
      touchArmorClass:"",
      flatFootedArmorClass:"",
      acModifiersField:""
    },
    weapons:[

    ],
    baseAttackBonus:3,
    spellResistance:"none",
    initiativeModifier: 0,
    name: "Eggy",
    alignment: "N/E",
    playerName: "Peter a.",
    level: 7,
    diety: "Nethys",
    homeland: "the Skillet",
    race: "egg",
    playerClass: "cleric",
    size: "s",
    gender: "F",
    age: 28,
    height: "2'1",
    weight: "1lbs",
    hair: "eggshell",
    eyes: "eggshell"
  }
};

const actionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    case UPDATE_NAME:
      return {
        ...state,
        character: { ...state.character, name: action.payload.target.value }
      };
    case UPDATE_ALIGNMENT:
      return {
        ...state,
        character: {
          ...state.character,
          alignment: action.payload.target.value
        }
      };
    case UPDATE_PLAYER_NAME:
      return {
        ...state,
        character: {
          ...state.character,
          playerName: action.payload.target.value
        }
      };
    case UPDATE_CLASS:
      return {
        ...state,
        character: {
          ...state.character,
          playerClass: action.payload.target.value
        }
      };
    case UPDATE_LEVEL:
      return {
        ...state,
        character: { ...state.character, level: action.payload.target.value }
      };
    case UPDATE_DIETY:
      return {
        ...state,
        character: { ...state.character, diety: action.payload.target.value }
      };
    case UPDATE_AGE:
      return {
        ...state,
        character: { ...state.character, age: action.payload.target.value }
      };
    case UPDATE_HOMELAND:
      return {
        ...state,
        character: { ...state.character, homeland: action.payload.target.value }
      };
    case UPDATE_RACE:
      return {
        ...state,
        character: { ...state.character, race: action.payload.target.value }
      };
    case UPDATE_SIZE:
      return {
        ...state,
        character: { ...state.character, size: action.payload.target.value }
      };
    case UPDATE_GENDER:
      return {
        ...state,
        character: { ...state.character, gender: action.payload.target.value }
      };
    case UPDATE_HEIGHT:
      return {
        ...state,
        character: { ...state.character, height: action.payload.target.value }
      };
    case UPDATE_WEIGHT:
      return {
        ...state,
        character: { ...state.character, weight: action.payload.target.value }
      };
    case UPDATE_HAIR:
      return {
        ...state,
        character: { ...state.character, hair: action.payload.target.value }
      };
    case UPDATE_EYES:
      return {
        ...state,
        character: { ...state.character, eyes: action.payload.target.value }
      };
    case INCREMENT_STR:
      return {
        ...state,
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            strength: state.character.stats.strength + 1,
            strMod: Math.floor((state.character.stats.strength - 9) / 2)
          }
        }
      };
    case DECREMENT_STR:
      return {
        ...state,
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            strength: state.character.stats.strength - 1,
            strMod: Math.floor((state.character.stats.strength - 11) / 2)
          }
        }
      };
    case INCREMENT_STR_TEMP:
      return {
        ...state,
        character: {
          ...state.character,
          statsTemporary: {
            ...state.character.statsTemporary,
            strength: state.character.statsTemporary.strength + 1,
            strMod: Math.floor(
              (state.character.statsTemporary.strength - 9) / 2
            )
          }
        }
      };
    case DECREMENT_STR_TEMP:
      return {
        ...state,
        character: {
          ...state.character,
          statsTemporary: {
            ...state.character.statsTemporary,
            strength: state.character.statsTemporary.strength - 1,
            strMod: Math.floor(
              (state.character.statsTemporary.strength - 11) / 2
            )
          }
        }
      };
    case INCREMENT_DEX:
      return {
        ...state,
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            dexterity: state.character.stats.dexterity + 1,
            dexMod: Math.floor((state.character.stats.dexterity - 9) / 2)
          }
        }
      };
    case DECREMENT_DEX:
      return {
        ...state,
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            dexterity: state.character.stats.dexterity - 1,
            dexMod: Math.floor((state.character.stats.dexterity - 11) / 2)
          }
        }
      };
    case INCREMENT_DEX_TEMP:
      return {
        ...state,
        character: {
          ...state.character,
          statsTemporary: {
            ...state.character.statsTemporary,
            dexterity: state.character.statsTemporary.dexterity + 1,
            dexMod: Math.floor(
              (state.character.statsTemporary.dexterity - 9) / 2
            )
          }
        }
      };
    case DECREMENT_DEX_TEMP:
      return {
        ...state,
        character: {
          ...state.character,
          statsTemporary: {
            ...state.character.statsTemporary,
            dexterity: state.character.statsTemporary.dexterity - 1,
            dexMod: Math.floor(
              (state.character.statsTemporary.dexterity - 11) / 2
            )
          }
        }
      };
    case INCREMENT_CON:
      return {
        ...state,
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            constitution: state.character.stats.constitution + 1,
            conMod: Math.floor((state.character.stats.constitution - 9) / 2)
          }
        }
      };
    case DECREMENT_CON:
      return {
        ...state,
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            constitution: state.character.stats.constitution - 1,
            conMod: Math.floor((state.character.stats.constitution - 11) / 2)
          }
        }
      };
    case INCREMENT_CON_TEMP:
      return {
        ...state,
        character: {
          ...state.character,
          statsTemporary: {
            ...state.character.statsTemporary,
            constitution: state.character.statsTemporary.constitution + 1,
            conMod: Math.floor(
              (state.character.statsTemporary.constitution - 9) / 2
            )
          }
        }
      };
    case DECREMENT_CON_TEMP:
      return {
        ...state,
        character: {
          ...state.character,
          statsTemporary: {
            ...state.character.statsTemporary,
            constitution: state.character.statsTemporary.constitution - 1,
            conMod: Math.floor(
              (state.character.statsTemporary.constitution - 11) / 2
            )
          }
        }
      };
    case INCREMENT_INT:
      return {
        ...state,
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            intelligence: state.character.stats.intelligence + 1,
            intMod: Math.floor((state.character.stats.intelligence - 9) / 2)
          }
        }
      };
    case DECREMENT_INT:
      return {
        ...state,
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            intelligence: state.character.stats.intelligence - 1,
            intMod: Math.floor((state.character.stats.intelligence - 11) / 2)
          }
        }
      };
    case INCREMENT_INT_TEMP:
      return {
        ...state,
        character: {
          ...state.character,
          statsTemporary: {
            ...state.character.statsTemporary,
            intelligence: state.character.statsTemporary.intelligence + 1,
            intMod: Math.floor(
              (state.character.statsTemporary.intelligence - 9) / 2
            )
          }
        }
      };
    case DECREMENT_INT_TEMP:
      return {
        ...state,
        character: {
          ...state.character,
          statsTemporary: {
            ...state.character.statsTemporary,
            intelligence: state.character.statsTemporary.intelligence - 1,
            intMod: Math.floor(
              (state.character.statsTemporary.intelligence - 11) / 2
            )
          }
        }
      };
    case INCREMENT_WIS:
      return {
        ...state,
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            wisdom: state.character.stats.wisdom + 1,
            wisMod: Math.floor((state.character.stats.wisdom - 9) / 2)
          }
        }
      };
    case DECREMENT_WIS:
      return {
        ...state,
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            wisdom: state.character.stats.wisdom - 1,
            wisMod: Math.floor((state.character.stats.wisdom - 11) / 2)
          }
        }
      };
    case INCREMENT_WIS_TEMP:
      return {
        ...state,
        character: {
          ...state.character,
          statsTemporary: {
            ...state.character.statsTemporary,
            wisdom: state.character.statsTemporary.wisdom + 1,
            wisMod: Math.floor((state.character.statsTemporary.wisdom - 9) / 2)
          }
        }
      };
    case DECREMENT_WIS_TEMP:
      return {
        ...state,
        character: {
          ...state.character,
          statsTemporary: {
            ...state.character.statsTemporary,
            wisdom: state.character.statsTemporary.wisdom - 1,
            wisMod: Math.floor((state.character.statsTemporary.wisdom - 11) / 2)
          }
        }
      };
    case INCREMENT_CHA:
      return {
        ...state,
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            charisma: state.character.stats.charisma + 1,
            chaMod: Math.floor((state.character.stats.charisma - 9) / 2)
          }
        }
      };
    case DECREMENT_CHA:
      return {
        ...state,
        character: {
          ...state.character,
          stats: {
            ...state.character.stats,
            charisma: state.character.stats.charisma - 1,
            chaMod: Math.floor((state.character.stats.charisma - 11) / 2)
          }
        }
      };
    case INCREMENT_CHA_TEMP:
      return {
        ...state,
        character: {
          ...state.character,
          statsTemporary: {
            ...state.character.statsTemporary,
            charisma: state.character.statsTemporary.charisma + 1,
            chaMod: Math.floor(
              (state.character.statsTemporary.charisma - 9) / 2
            )
          }
        }
      };
    case DECREMENT_CHA_TEMP:
      return {
        ...state,
        character: {
          ...state.character,
          statsTemporary: {
            ...state.character.statsTemporary,
            charisma: state.character.statsTemporary.charisma - 1,
            chaMod: Math.floor(
              (state.character.statsTemporary.charisma - 11) / 2
            )
          }
        }
      };
    case UPDATE_MAX_HP:
      return {
        ...state,
        character: {
          ...state.character,
          health: {
            ...state.character.health,
            max: action.payload.target.value
          }
        }
      };
    case UPDATE_CURRENT_HP:
      return {
        ...state,
        character: {
          ...state.character,
          health: {
            ...state.character.health,
            current: action.payload.target.value
          }
        }
      };
    case UPDATE_NONLETHAL:
      return {
        ...state,
        character: {
          ...state.character,
          health: {
            ...state.character.health,
            nonLethal: action.payload.target.value
          }
        }
      };
    case UPDATE_DR:
      return {
        ...state,
        character: {
          ...state.character,
          health: { ...state.character.health, DR: action.payload.target.value }
        }
      };
    case UPDATE_INITIATIVE_MOD:
      return {
        ...state,
        character: {
          ...state.character,
          initiativeModifier: action.payload.target.value
        }
      };
    case UPDATE_SKILL_RANK:
      const skillArray = state.character.skills;
      const skillIndex = skillArray.indexOf(skillInState);
      let skillInState = state.character.skills.find(
        skill => skill.id === parseInt(action.payload.nativeEvent.path[1].id)
      );
      skillInState.ranks = action.payload.target.value;
      return {
        ...state,
        character: {
          ...state.character,
          skills: state.character.skills.map((item, index) =>
            index === skillInState.id ? skillInState : item
          )
        }
      };
      break;
    case UPDATE_SKILL_MISC_MOD:
      const skillArrayMiscMod = state.character.skills;
      const skillInStateMiscMod = state.character.skills.find(
        skill => skill.id === parseInt(action.payload.nativeEvent.path[1].id)
      );
      const skillIndexMiscMod = skillArrayMiscMod.indexOf(skillInStateMiscMod);
      skillInStateMiscMod.miscMod = action.payload.target.value;
      return {
        ...state,
        character: {
          ...state.character,
          skills: state.character.skills.map((item, index) =>
            index === skillInStateMiscMod.id ? skillInStateMiscMod : item
          )
        }
      };
      break;
    case UPDATE_SKILL_DESCRIPTION:
      const skillArrayDescription = state.character.skills;
      const skillInStateDescription = state.character.skills.find(
        skill => skill.id === parseInt(action.payload.nativeEvent.path[2].id)
      );
      const skillIndexDescription = skillArrayDescription.indexOf(
        skillInStateDescription
      );
      skillInStateDescription.skillDescription = action.payload.target.value;
      return {
        ...state,
        character: {
          ...state.character,
          skills: state.character.skills.map((item, index) =>
            index === skillInStateDescription.id
              ? skillInStateDescription
              : item
          )
        }
      };
      break;
    case UPDATE_SKILL_IS_CLASS:
      const skillArrayIsClass = state.character.skills;
      const skillInStateIsClass = state.character.skills.find(
        skill => skill.id === parseInt(action.payload.nativeEvent.path[1].id)
      );
      const skillIndexIsClass = skillArrayIsClass.indexOf(
        skillInStateIsClass
      ); 
      skillInStateIsClass.isClass = action.payload.target.checked;
      return {
        ...state,
        character: {
          ...state.character,
          skills: state.character.skills.map((item, index) =>
            index === skillInStateIsClass.id
              ? skillInStateIsClass
              : item
          )
        }
      }; 
      break;

    default:
      return state;
  }
};

export default actionReducer;
