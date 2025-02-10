import { NextResponse } from "next/server";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const prankLevel = parseInt(searchParams.get("level") || "1");

  try {
    const response = await fetch("http://localhost:3000/api/weather", {
      headers: {
        Authorization: "CWA-1570388B-4389-4FA1-8065-32D6BDF0FD2E",
      },
    });
    const data = await response.json();

    if (!data.success) {
      throw new Error("API 回應不成功");
    }

    const prankedData = transformWeatherData(data, prankLevel);
    return NextResponse.json(prankedData);
  } catch (error) {
    return NextResponse.json({ error: "無法獲取天氣資料" }, { status: 500 });
  }
};

function transformWeatherData(data, prankLevel) {
  const funnyWeather = {
    1: ["飄漂浮麵", "下巧克力雨", "多雲偶陣薯片"],
    2: ["暴風披薩", "龍捲可樂", "陣陣泡泡"],
    3: ["火鍋暴風", "珍奶雨", "超級彩虹"],
  };

  const funnyTemp = {
    1: { min: -2, max: 2 },
    2: { min: -5, max: 5 },
    3: { min: -10, max: 10 },
  };

  const funnyCI = {
    1: ["微微餓", "有點想喝飲料", "需要甜點"],
    2: ["超級餓", "口渴到爆", "甜食成癮"],
    3: ["餓到發瘋", "渴到昏倒", "甜點中毒"],
  };

  if (data.records && data.records.location) {
    data.records.location = data.records.location.map((location) => {
      location.weatherElement = location.weatherElement.map((element) => {
        element.time.forEach((timeSlot) => {
          switch (element.elementName) {
            case "Wx":
              const randomWeather =
                funnyWeather[prankLevel][
                  Math.floor(Math.random() * funnyWeather[prankLevel].length)
                ];
              timeSlot.parameter.parameterName = randomWeather;
              timeSlot.parameter.parameterValue = String(
                Math.floor(Math.random() * 15) + 1
              );
              break;

            case "MinT":
            case "MaxT":
              const originalTemp = parseInt(timeSlot.parameter.parameterName);
              const variation =
                funnyTemp[prankLevel][
                  element.elementName === "MinT" ? "min" : "max"
                ];
              const newTemp =
                originalTemp +
                Math.floor(Math.random() * variation * 2) -
                variation;
              timeSlot.parameter.parameterName = String(newTemp);
              break;

            case "CI":
              const randomCI =
                funnyCI[prankLevel][
                  Math.floor(Math.random() * funnyCI[prankLevel].length)
                ];
              timeSlot.parameter.parameterName = randomCI;
              break;

            case "PoP":
              const originalPoP = parseInt(timeSlot.parameter.parameterName);
              const newPoP = Math.min(100, originalPoP + prankLevel * 20);
              timeSlot.parameter.parameterName = String(newPoP);
              break;
          }
        });
        return element;
      });
      return location;
    });
  }

  return data;
}
