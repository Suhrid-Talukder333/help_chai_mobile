import lodash from 'lodash'

export const carouselItems = [
  {
    img: "/images/carousel1.jpeg",
    desc: 'Safety',
    buttonIcon: "AcademicCapIcon",
    text: "Ensure your water source is clean and uncontaminated.",
    color: "#dbf3fc",
    ref: "Image by stockgiu on Freepik"
  },
  {
    img: "/images/carousel3.jpeg",
    desc: 'Boiling',
    buttonIcon: "BeakerIcon",
    text: "Boiling water is a simple yet effective method.",
    color: "#f09d44",
    ref: "Image by brgfx on Freepik"
  },
  {
    img: "/images/carousel2.jpeg",
    desc: 'Filtering',
    buttonIcon: "FunnelIcon",
    text: "Use a reliable water filter to remove impurities and contaminants",
    color: "#1dcece",
    ref: "Image by macrovector on Freepik"
  },
  {
    img: "/images/carousel4.jpeg",
    desc: 'Spread',
    buttonIcon: "GlobeAsiaAustraliaIcon",
    text: "Spread the message!",
    color: "#f2f7fb",
    ref: "Image by pch.vector on Freepik"
  },
]

export const TEAM_INFO = [
  {
    name: "Jaber Bin Abdul Bari",
    pos_title: "Research Assistant",
    fb_url: "https://facebook.com"
  },
  {
    name: "Suhrid Talukder",
    pos_title: "Research Assistant",
    fb_url: "https://facebook.com"
  },
  {
    name: "Kawshik Ahmed",
    pos_title: "Research Assistant",
    fb_url: "https://facebook.com"
  },
  {
    name: "Sanjida Nisa",
    pos_title: "Research Assistant",
    fb_url: "https://facebook.com"
  },
  {
    name: "Md. Fizul Islam",
    pos_title: "Research Assistant",
    fb_url: "https://facebook.com"
  },
  {
    name: "Md. Shiblu",
    pos_title: "Research Assistant",
    fb_url: "https://facebook.com"
  },
  {
    name: "Sunanda Dewan",
    pos_title: "Research Assistant",
    fb_url: "https://facebook.com"
  },
  {
    name: "Md. Maeen Uddin",
    pos_title: "Research Assistant",
    fb_url: "https://facebook.com"
  },
  {
    name: "Khadija Akter Riya",
    pos_title: "Research Assistant",
    fb_url: "https://facebook.com"
  },
]

export const TEAM_LEADER_INFO = [
  {
    name: "Md. Saiful Islam",
    pos_title: "Project Coordinator",
    fb_url: "https://facebook.com"
  },
  {
    name: "Najmus Sakib Khan",
    pos_title: "Advisor",
    fb_url: "https://facebook.com"
  }
]

const BIS_STANDARD_VALUES_WHO = {
  "ph": 8.5,
  "ec": 1000,
  // "turb": 5,
  // "alk": 120,
  "tds": 1000,
  // "ca": 200,
  // "mg": 50,
  // "na": 200,
  "th": 300,
  // "k": 12,
  "cl": 600,
  "s": 500,
  // "do": null,
  "fe": 0.5,
  "arsenic": 0.01,
}

const BIS_STANDARD_VALUES_BD = {
  "ph": 8.5,
  "ec": 1000,
  // "turb": 5,
  // "alk": 120,
  "tds": 500,
  // "ca": 200,
  // "mg": 50,
  // "na": 200,
  "th": 300,
  // "k": 12,
  "cl": 250,
  "s": 200,
  // "do": null,
  "fe": 0.5,
  "arsenic": 0.05,
}

const IDEAL_VALUES = {
  "ph": 7,
  "ec": 0,
  // "turb": 0,
  // "alk": 0,
  "tds": 0,
  // "ca": 0,
  // "mg": 0,
  // "na": 0,
  "th": 0,
  // "k": 0,
  "cl": 0,
  "s": 0,
  // "do": 0,
  "fe": 0,
  "arsenic": 0,
}

const get_result_index = (result) => {
  if (result < 50) {
    return "excellent";
  } else if (result >= 50 && result < 100) {
    return "good";
  } else if (result >= 100 && result < 200) {
    return "poor";
  } else if (result >= 200 && result < 300) {
    return "verypoor";
  } else {
    return "unfit"
  }
}

export const RESULT_DESC = {
  "excellent": ["Ideal for drinking", "Highest quality, meets or exceeds all safety standards."],
  "good": ["Suitable for daily use","Healthy and safe, minimal impurities."],
  "poor": ["Consider additional purification","Caution advised due to noticeable impurities."],
  "verypoor": ["Avoid direct consumption","Significant contamination."],
  "unfit": ["Serious health risks", "Dangerously contaminated Avoid for drinking or cooking without thorough purification."]
}

export const RESULT_COLOR= {
  "excellent": "#00FF7F",
  "good": "#98FB98",
  "poor": "#FFEA00",
  "verypoor": "#FFAA33",
  "unfit": "#FF0000"
}

export const RESULT_ICONS= {
  "excellent": "ShieldCheckIcon",
  "good": "FaceSmileIcon",
  "poor": "ExclamationTriangleIcon",
  "verypoor": "XCircleIcon",
  "unfit": "HandRaisedIcon"
}

export const RESULT_IMG_URL = {
  "excellent": require("./img/bestLevelWater.jpg"),
  "good": require("./img/goodLevelWater.jpg"),
  "poor": require("./img/poorLevelWater.jpg"),
  "verypoor": require("./img/worseLevelWater.jpg"),
  "unfit": require("./img/unfitLevelWater.png")
}

const CalculateWi = (standardValues) => {
  var _1BySn = lodash.cloneDeep(standardValues);
  Object.keys(_1BySn).forEach((key) => {
    if (_1BySn[key] != null) {
      _1BySn[key] = 1 / _1BySn[key];
    }
  });
  let sum_1BySn = 0
  Object.keys(_1BySn).forEach((key) => {
    if (_1BySn[key] != null) {
      sum_1BySn += _1BySn[key];
    }
  });
  const K = 1 / sum_1BySn;
  console.log(K, "K");
  let wi = lodash.cloneDeep(standardValues);
  Object.keys(wi).forEach((key) => {
    if (wi[key] != null) {
      wi[key] = K / wi[key];
    }
  });
  let sum_wi = 0
  Object.keys(wi).forEach((key) => {
    if (wi[key] != null) {
      sum_wi += wi[key];
    }
  });
  sum_wi = Math.round(sum_wi);
  console.log(wi, "wi")
  if (sum_wi != 1) {
    throw Error("Invalid")("Invalid")
  }
  return wi;
}

const validateData = (data1, data2) => {
  let valid = true;
  let data1keys = Object.keys(data1);
  let data2keys = Object.keys(data2);
  if (data1keys.length !== data2keys.length) {
    return false
  }
  data1keys.map((key) => {
    if (!data2keys.includes(key)) {
      valid = false;
    }
  })
  return valid;
}

const CalculateQi = (data, standardValues) => {
//   let formDataObj = {};
//   data.forEach((value, key) => (formDataObj[key] = value));
  const ANALYZED_DATA = lodash.cloneDeep(data);
  let analyzedData = lodash.cloneDeep(ANALYZED_DATA);
  if (!validateData(analyzedData, standardValues)) {
    throw Error("Invalid")
  }
  if (!validateData(analyzedData, IDEAL_VALUES)) {
    throw Error("Invalid")
  }
  let qi = lodash.cloneDeep(analyzedData);
  Object.keys(data).forEach((key) => {
    if (qi[key] != null && (IDEAL_VALUES)[key] != null && (standardValues)[key] != null) {
      let va_vi = qi[key] - (IDEAL_VALUES)[key];
      let vs_vi = (standardValues)[key] - (IDEAL_VALUES)[key];
      qi[key] = (va_vi / vs_vi) * 100;
    }
  });
  return qi
}

export const CalculateWaterWHO = (data) => {
  const wi = CalculateWi(BIS_STANDARD_VALUES_WHO);
  const qi = CalculateQi(data, BIS_STANDARD_VALUES_WHO)
  if (!validateData(wi, qi)) {
    throw Error("Invalid")
  }
  let wiqi = lodash.cloneDeep(wi);
  Object.keys(wiqi).forEach((key) => {
    if (wiqi[key] != null && (wi)[key] != null && (qi)[key] != null) {
      wiqi[key] = (wi[key] * qi[key]);
    }
  });
  console.log(wiqi, "wiqi")
  let sum_wiqi = 0;
  Object.keys(wiqi).forEach((key) => {
    sum_wiqi += wiqi[key];
  });
  let result_value = lodash.round(sum_wiqi, 1);
  console.log(result_value)
  let result_index = get_result_index(result_value);
  let result_desc = RESULT_DESC[result_index]
  let result_img_url = RESULT_IMG_URL[result_index]
  let result_color = RESULT_COLOR[result_index]
  let result_icon = RESULT_ICONS[result_index]
  let result_data = {
    value: result_value,
    desc: result_desc,
    img_url: result_img_url,
    color: result_color,
    result_index: result_index,
    icon: result_icon,
  }
  return result_data;
}

export const CalculateWaterBD = (data) => {
  const wi = CalculateWi(BIS_STANDARD_VALUES_BD);
  const qi = CalculateQi(data, BIS_STANDARD_VALUES_BD)
  if (!validateData(wi, qi)) {
    throw Error("Invalid")
  }
  let wiqi = lodash.cloneDeep(wi);
  Object.keys(wiqi).forEach((key) => {
    if (wiqi[key] != null && (wi)[key] != null && (qi)[key] != null) {
      wiqi[key] = (wi[key] * qi[key]);
    }
  });
  let sum_wiqi = 0;
  Object.keys(wiqi).forEach((key) => {
    sum_wiqi += wiqi[key];
  });
  let result_value = lodash.round(sum_wiqi, 1);
  console.log(result_value)
  let result_index = get_result_index(result_value);
  let result_desc = RESULT_DESC[result_index]
  let result_img_url = RESULT_IMG_URL[result_index]
  let result_color = RESULT_COLOR[result_index]
  let result_icon = RESULT_ICONS[result_index]
  let result_data = {
    value: result_value,
    desc: result_desc,
    img_url: result_img_url,
    color: result_color,
    result_index: result_index,
    icon: result_icon,
  }
  return result_data;
}