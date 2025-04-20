import Randexp from "randexp";
export const generateRandomColors = () => {
  return `#${new Randexp(/^([a-f]){6}$/).gen()}`;
};
export const getAllUnique = (array) => {
  const uniqueObjects = new Set();
  const result = [];

  for (const item of array) {
    const objectString = JSON.stringify(item);

    if (!uniqueObjects.has(objectString)) {
      uniqueObjects.add(objectString);
      result.push(item);
    }
  }

  return result;
};

export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};
export const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};
export const deleteCookie = (cname) => {
  const d = new Date();
  d.setTime(d.getTime() - 7);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=;" + expires + ";path=/";
};
export const getNextRenewableDate = (days = "", months = "", years = "") => {
  let currentDate = new Date();

  if (months !== "" && months !== 0)
    currentDate.setMonth(currentDate.getMonth() + +months);
  else if (days !== "" && days !== 0)
    currentDate.setDate(currentDate.getDate() + +days);
  else if (years !== "" && years !== 0)
    currentDate.setFullYear(currentDate.getFullYear() + years);
  return new Date(currentDate).toString();
};
export const groupByField = (array, fieldName) => {
  return array.reduce((result, obj) => {
    const key = obj[fieldName];

    if (!result[key]) {
      result[key] = [];
    }
    result[key].push({ ...obj, field: key });

    return result;
  }, {});
};

export const valueMapper = (templateArr, subModuleArr) => {
  let arr = [];
  subModuleArr?.filter((item) => {
    let template = templateArr.filter((ele) => {
      if (ele?._id === item?._id) {
        let obj = { ...ele, item };
        arr.push(obj);
      }
    });
    return template;
  });
  return arr;
};

export const groupByModuleID = (data) => {
  const modules = {};
  const subModules = {};
  const features = {};
  data.forEach((item) => {


    if (!modules[item.moduleID]) {
      modules[item.moduleID] = {
        title: item.moduleName,
        key: `module_${item.moduleID}`,
        children: [],
      };
    }

    if (!subModules[item.subModuleID]) {
      subModules[item.subModuleID] = {
        title: item.subModuleName,
        key: `subModule_${item.subModuleID}_${item.moduleID}`,
        children: [],
      };
      modules[item.moduleID].children.push(subModules[item.subModuleID]);
    }

    features[item.featureID] = {
      title: item.featureName,
      key: `feature_${item.featureID}_${item.subModuleID}_${item.moduleID}`,
      isLeaf: true,
    };
    subModules[item.subModuleID].children.push(features[item.featureID]);
  });

  return Object.values(modules);
};
export const extractMakedFeaturesForEmployee = (planFeatures, checkedKeys) => {
  const filteredFeatures = new Set(checkedKeys.filter(item => item.includes("feature")));
  const res = planFeatures?.filter(item => {
    const featureKey = `feature_${item?.featureID}_${item.moduleID}_${item.parentModuleID}`;
    return filteredFeatures.has(featureKey);
  });
  return res;
};
export const groupByModuleIDForVendors = (data) => {
  const modules = {};
  const subModules = {};
  const features = {};
  data?.map((item) => {

    if (!modules[item.parentModuleID]) {
      modules[item.parentModuleID] = {
        title: item.parentModuleName,
        key: `module_${item.parentModuleID}`,
        children: [],
      };
    }

    if (!subModules[item.moduleID]) {
      subModules[item.moduleID] = {
        title: item.moduleName,
        key: `subModule_${item.moduleID}_${item.parentModuleID}`,
        children: [],
      };
      modules[item.parentModuleID].children.push(subModules[item.moduleID]);
    }

    features[item.featureID] = {
      title: item.featureName,
      key: `feature_${item.featureID}_${item.moduleID}_${item.parentModuleID}`,
      isLeaf: true,
    };
    subModules[item.moduleID].children.push(features[item.featureID]);


  });

  return Object.values(modules);



};
export const updateTreeVisibility = (inputData, tree) => {

  // Helper function to set visibility for matching labels
  function setVisibility(tree, label, visible) {
    for (const item of tree) {
      if (item.label === label) {
        item.visible = visible;
      }

      if (item.nestedItems && item.nestedItems.length > 0) {
        setVisibility(item.nestedItems, label, visible);
      }
    }
  }

  // Set visibility for "Dashboard"
  setVisibility(tree, "Dashboard", true);

  // Create a map to easily lookup visibility based on inputData
  const visibilityMap = {};
  inputData?.forEach(item => {
    visibilityMap[item.parentModuleName] = true;
    visibilityMap[item.moduleName] = true;
    visibilityMap[item.featureName] = true;
  });

  // Helper function to update visibility based on visibilityMap
  function updateVisibilityBasedOnData(tree) {
    for (const item of tree) {
      if (visibilityMap[item.label]) {
        item.visible = true;
      } else {
        item.visible = false;
      }
      if (item.nestedItems && item.nestedItems.length > 0) {
        updateVisibilityBasedOnData(item.nestedItems);
      }
    }
  }

  // Update visibility for the entire tree
  updateVisibilityBasedOnData(tree);

  return tree;
}
export const getAuthFeatureList = (authDetails) => {
  if (authDetails?.data?.employee?.permissions) {
    return authDetails?.data?.employee?.permissions
  } else if ((authDetails?.data?.role?.companies?.length)) {
    return authDetails?.data?.role?.companies[0].purchase?.plan?.planFeatures
  }
  else if (authDetails?.data?.permissions?.length) {
    return authDetails?.data?.permissions
  }
  else {
    return []
  }
}
export const getCurrentCompanyDetails = (authDetails) => {
  const { role } = authDetails.data;
  return (role?.companies)
}

export const mapWithPlanFeaturesAndMappers = (moduleFeatureMapperArray, planFeatureArray) => {
  const result = [];

  // Create a Set from the planFeatureArray for faster lookup
  const planFeatureSet = new Set(planFeatureArray);


  moduleFeatureMapperArray?.forEach((el) => {

    const featureStr = `${el.featureID}_${el.subModuleID}_${el.moduleID}`;


    if (Array.from(planFeatureSet).some((feature) => (new RegExp(featureStr)).test(feature))) {
      result.push(el);
    }
  });

  return result;
};

export const transformArray = (array1) => {
  const result = [];

  array1.forEach((item) => {
    // Find the module in the result array or create a new one
    let module = result.find(mod => mod.moduleID === item.moduleID);
    if (!module) {
      module = {
        moduleID: item?.moduleID,
        moduleName: item?.moduleName,
        subModules: []
      };
      result.push(module);
    }

    // Find the submodule in the module's subModules array or create a new one
    let subModule = module.subModules.find(subMod => subMod.subModuleID === item.subModuleID);
    if (!subModule) {
      subModule = {
        subModuleID: item.subModuleID,
        subModuleName: item.subModuleName,
        features: []
      };
      module.subModules.push(subModule);
    }

    // Add the feature to the subModule's features array if it doesn't already exist
    if (!subModule.features.find(feature => feature.featureID === item.featureID)) {
      subModule.features.push({
        featureID: item.featureID,
        featureName: item.featureName
      });
    }
  });

  return result;
};
export const generateRandomPercentage = () => {
  return Array.from(Array(150).fill(), (_, i) => i + 1).map((item) => {
    return { value: item * 0.25, label: `${item * 0.25}%` }
  })
}
export const merge2ArrayOfObject = (arr1, arr2) => {
  return arr2.map(category => {
    const matchedItems = category.itemList.filter(item =>
      arr1.some(obj => obj.itemName === item.value)
    );

    if (matchedItems.length > 0) {

      const updatedItems = matchedItems.map(item => {
        const foundItem = arr1.find(obj => obj.itemName === item.value);
        return {
          ...item,
          cft: foundItem.cft,
          qty: foundItem.qty,
          amount: foundItem.amount,
          remarks: foundItem.remarks
        };
      });

      return {
        itemType: category.itemType,
        itemList: updatedItems
      };
    }
    return null;
  }).filter(Boolean); // Remove null entries
}
export const convertJsonToQueryParams = (params) => {
  let url = "?";
  for (let key in params) {
    url += key + "=" + params[key] + "&";
  }

  return url.substring(0, url.length - 1)

};
export const isExistSubModuleInPlan = (featureList, planName) => {
  return featureList.find(feature => {

    return feature.moduleName.toString() === planName.toString()
  })
}

/**
 * Compresses a string using Run-Length Encoding (RLE).
 * @param {string} input - The input string to compress.
 * @returns {string} - The compressed string.
 */
export const imageCompression = (input) => {
  if (!input) return "";

  let compressed = "";
  let count = 1;

  for (let i = 0; i < input.length; i++) {
    // If the current character is the same as the next, increment the count
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      // Append the character and its count to the compressed string
      compressed += input[i] + (count > 1 ? count : "");
      count = 1; // Reset the count
    }
  }

  return compressed;
}

/**
 * Decompresses a string compressed with Run-Length Encoding (RLE).
 * @param {string} compressed - The compressed string.
 * @returns {string} - The decompressed string.
 */
export const imageDecompression = (compressed) => {
  if (!compressed) return "";

  let decompressed = "";
  let i = 0;

  while (i < compressed.length) {
    let char = compressed[i];
    i++;

    // Check if the next character(s) are digits (count)
    let count = "";
    while (i < compressed.length && !isNaN(compressed[i])) {
      count += compressed[i];
      i++;
    }

    // If count is empty, it means the character appears once
    decompressed += char.repeat(count ? parseInt(count) : 1);
  }

  return decompressed;
}

