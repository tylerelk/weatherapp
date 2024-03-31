export default function SetWeatherTheme(status) {
  const condition = () => {
    if ((status === status) === 1000 || status === 1003) {
      return "sunny";
    } else if (
      status === 1006 ||
      status === 1009 ||
      status === 1030 ||
      status === 1135 ||
      status === 1147
    ) {
      return "cloudy";
    } else if (
      status === 1063 ||
      status === 1072 ||
      status === 1087 ||
      status === 1063 ||
      status === 1072 ||
      status === 1150 ||
      status === 1153 ||
      status === 1168 ||
      status === 1171 ||
      status === 1180 ||
      status === 1183 ||
      status === 1186 ||
      status === 1189 ||
      status === 1192 ||
      status === 1195 ||
      status === 1198 ||
      status === 1201 ||
      status === 1240 ||
      status === 1243 ||
      status === 1246
    ) {
      return "rainy";
    } else if (
      status === 1066 ||
      status === 1069 ||
      status === 1114 ||
      status === 1117 ||
      status === 1204 ||
      status === 1207 ||
      status === 1210 ||
      status === 1213 ||
      status === 1216 ||
      status === 1219 ||
      status === 1222 ||
      status === 1225 ||
      status === 1237 ||
      status === 1249 ||
      status === 1252 ||
      status === 1255 ||
      status === 1258 ||
      status === 1261 ||
      status === 1264
    ) {
      return "snowy";
    } else if (
      status === 1087 ||
      status === 1273 ||
      status === 1276 ||
      status === 1279 ||
      status === 1282
    ) {
      return "stormy";
    } else {
      return 'sunny';
    }
  };
  switch (condition()) {
    case "sunny":
      document.documentElement.style.setProperty("--background", "#F6EEDF");
      document.documentElement.style.setProperty("--highlight", "#FFD31D");
      document.documentElement.style.setProperty("--text", "#D63447");
      document.documentElement.style.setProperty("--accent", "#F57B51");
      break;
    case "cloudy":
      document.documentElement.style.setProperty("--background", "#352F44");
      document.documentElement.style.setProperty("--highlight", "#5C5470");
      document.documentElement.style.setProperty("--text", "#FAF0E6");
      document.documentElement.style.setProperty("--accent", "#B9B4C7");
      break;
    case "rainy":
      document.documentElement.style.setProperty("--background", "#4B778D");
      document.documentElement.style.setProperty("--highlight", "#28B5B5");
      document.documentElement.style.setProperty("--text", "#D2E69C");
      document.documentElement.style.setProperty("--accent", "#8FD9A8");
      break;
    case "snowy":
      document.documentElement.style.setProperty("--background", "#DFF5FF");
      document.documentElement.style.setProperty("--highlight", "#67C6E3");
      document.documentElement.style.setProperty("--text", "#5356FF");
      document.documentElement.style.setProperty("--accent", "#378CE7");
      break;
    case "stormy":
      document.documentElement.style.setProperty("--background", "#0E2954");
      document.documentElement.style.setProperty("--highlight", "#2E8A99");
      document.documentElement.style.setProperty("--text", "#84A7A1");
      document.documentElement.style.setProperty("--accent", "#1F6E8C");
      break;
  }
}
