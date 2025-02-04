import React, { useState } from 'react';
import './calculator.css';

const translations = {
  en: {
    title: "Farmer Calculator",
    language: "Language",
    selectCalculation: "Select Calculation",
    calculate: "Calculate",
    reset: "Reset",
    result: "Result",
    error: "Error",
    calculationTypes: {
      profit: "Profit",
      cropCost: "Crop Cost",
      loan: "Loan EMI",
      yield: "Yield Estimation",
      marketPrice: "Market Price",
      subsidy: "Subsidy Information",
      irrigationCost: "Irrigation Cost",
      fertilizerCost: "Fertilizer Cost",
      pesticideCost: "Pesticide Cost",
      totalInvestment: "Total Investment",
      //roi: "Return on Investment (ROI)",
      //harvestingCost: "Harvesting Cost",
      transportCost: "Transport Cost"
    },
    placeholders: {
      quantity: "Quantity(in Kg)",
      price: "Price per unit",
      landSize: "Land Size (acres)",
      landCost:"Enter land cost",
      seedCost: "Seed Cost(for 1 acre)",
      fertilizerCost: "Fertilizer Cost(for 1 acre)",
      fertilizerCostPerUnit:"Fertilizer Cost PerUnit",
      fertilizerQuantityPerAcre:"Fertilizer Quantity PerAcre",
      laborCost: "Labor Cost",
      waterCost: "Water Cost (for 1 acre)",
      loanAmount: "Loan Amount",
      interestRate: "Interest Rate (%)",
      durationMonths: "Duration (months)",
      expectedYieldPerAcre: "Yield per Acre (kg)",
      cropType: "Crop Type",
      commodity: "Commodity",
      waterUsagePerAcre: "Water Usage per Acre(in litres)",
      costPerLiter: "Cost per Liter",
      pesticideAmountPerAcre: "Pesticide quantity per Acre(in liters)",
      pesticideCostPerUnit: "Pesticide Cost per Unit",
      pesticideCostPerLiter:"Pesticide Cost",
      totalInvestment: "Total Investment",
      profit: "Profit",
      equipmentCost: "Equipment Cost",
      distance: "Distance (km)",
      fuelCostPerKm: "Fuel Cost per Km",
      number:"number",
    }
  },
  hi: { 
    title: "किसान कैलकुलेटर",
    language: "भाषा",
    selectCalculation: "गणना चुनें",
    calculate: "गणना करें",
    reset: "रीसेट करें",
    result: "परिणाम",
    error: "त्रुटि",
    calculationTypes: {
      profit: "लाभ",
      cropCost: "फसल लागत",
      loan: "ऋण ईएमआई",
      yield: "उपज अनुमान",
      marketPrice: "बाजार मूल्य",
      subsidy: "सब्सिडी जानकारी",
      irrigationCost: "सिंचाई लागत",
      fertilizerCost: "उर्वरक लागत",
      pesticideCost: "कीटनाशक लागत",
      totalInvestment: "कुल निवेश",
      //roi: "निवेश पर लाभ (ROI)",
     // harvestingCost: "कटाई लागत",
      transportCost: "परिवहन लागत"
    },
    placeholders: {
      quantity: "मात्रा(in Kg)",
      price: "प्रति इकाई मूल्य",
      landSize: "भूमि का आकार (एकड़)",
      landCost:"भूमि लागत दर्ज करें",
      seedCost: "बीज लागत(for 1 acre)",

      fertilizerCost: "उर्वरक लागत(for 1 acre)",
      fertilizerQuantityPerAcre:"प्रति एकड़ उर्वरक मात्रा",
      fertilizerCostPerUnit:"प्रति इकाई उर्वरक लागत",

      laborCost: "श्रम लागत",
      waterCost: "पानी की लागत (for 1 acre)",
      loanAmount: "ऋण राशि",
      interestRate: "ब्याज दर (%)",
      durationMonths: "अवधि (महीने)",
      expectedYieldPerAcre: "प्रति एकड़ उपज (किग्रा)",
      cropType: "फसल का प्रकार",
      commodity: "वस्तु",
      waterUsagePerAcre: "प्रति एकड़ पानी की खपत(in litres)",
      costPerLiter: "प्रति लीटर लागत",
      pesticideAmountPerAcre: "प्रति एकड़ कीटनाशक मात्रा (किलोग्राम में)",
      pesticideCostPerUnit: "प्रति इकाई कीटनाशक लागत",
      pesticideCostPerLiter:"कीटनाशक लागत",
      totalInvestment: "कुल निवेश",
      profit: "लाभ",
      equipmentCost: "उपकरण लागत",
      distance: "दूरी (किमी)",
      fuelCostPerKm: "प्रति किमी ईंधन लागत"
    }
  },
  te: {
  "title": "కిసాన్ కాల్క్యులేటర్",
  "language": "భాష",
  "selectCalculation": "గణనను ఎంచుకోండి",
  "calculate": "గణన చేయండి",
  "reset": "పునరావృతం",
  "result": "ఫలితం",
  "error": "పరిష్కారం",
  "calculationTypes": {
    "profit": "లాభం",
    "cropCost": "పంట వ్యయం",
    "loan": "ఋణ EMI",
    "yield": "ఉత్పత్తి అంచనా",
    "marketPrice": "మార్కెట్ ధర",
    "subsidy": "ఉపకార సమాచారం",
    "irrigationCost": "నిర్మాణ వ్యయం",
    "fertilizerCost": "పరిమాణ వ్యయం",
    "pesticideCost": "జీవమృత్తు వ్యయం",
    "totalInvestment": "మొత్తం పెట్టుబడి",
    //"roi": "పెట్టుబడి పై లాభం (ROI)",
    //"harvestingCost": "వేట వ్యయం",
    "transportCost": "రవాణా వ్యయం"
  },
  "placeholders": {
    "quantity": "మాత్ర (in Kg)",
    "price": "ప్రతి యూనిట్ ధర",
    "landSize": "భూమి పరిమాణం (ఎకరాలు)",
    "landCost":"భూమి ఖర్చు నమోదు చేయండి",
    "seedCost": "విత్తన వ్యయం(for 1 acre)",
    "fertilizerCost": "పరిమాణ వ్యయం(for 1 acre)",
    "fertilizerQuantityPerAcre":"ఎకరాకు ఎరువుల పరిమాణం",
    "fertilizerCostPerUnit":"ప్రతి యూనిట్‌కు ఎరువుల ఖర్చు",

    "laborCost": "పని వ్యయం",
    "waterCost": "నీటి వ్యయం (for 1 acre)",
    "loanAmount": "ఋణ మొత్తం",
    "interestRate": "వడ్డీ రేటు (%)",
    "durationMonths": "సమయం (నెలలు)",
    "expectedYieldPerAcre": "ప్రతి ఎకరానికి ఉత్పత్తి (కిలో)",
    "cropType": "పంట రకం",
    "commodity": "వస్తువు",
    "waterUsagePerAcre": "ప్రతి ఎకరానికి నీటి వినియోగం(in litres)",
    "costPerLiter": "ప్రతి లీటర్ వ్యయం",
    "pesticideAmountPerAcre": "ఎకరాకు పురుగుమందు పరిమాణం (కిలోగ్రాములలో)",
    "pesticideCostPerUnit": "ప్రతి యూనిట్ పురుగుమందు వ్యయం",
    "pesticideCostPerLiter":"పురుగుమందు ఖర్చు",
    "totalInvestment": "మొత్తం పెట్టుబడి",
    "profit": "లాభం",
    "equipmentCost": "పరికరం వ్యయం",
    "distance": "దూరం (కిలోమీటర్లు)",
    "fuelCostPerKm": "ప్రతి కిలోమీటర్ ఇంధన వ్యయం"
  }
},
  ka: {
  "title": "ಕೃಷಿ ಕ್ಯಾಲ್ಕ್ಯುಲೆಟರ್",
  "language": "ಭಾಷೆ",
  "selectCalculation": "ಗಣನೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",
  "calculate": "ಗಣನೆ ಮಾಡಿ",
  "reset": "ಪುನರಾರಂಭ",
  "result": "ಫಲಿತಾಂಶ",
  "error": "ದೋಷ",
  "calculationTypes": {
    "profit": "ಲಾಭ",
    "cropCost": "ಮೂಡಲ ವೆಚ್ಚ",
    "loan": "ಕಡಿತ EMI",
    "yield": "ಉತ್ಪಾದನೆ ಅಂದಾಜು",
    "marketPrice": "ಮಾರುಕಟ್ಟೆ ಬೆಲೆ",
    "subsidy": "ಉಪಕಾರ ಮಾಹಿತಿ",
    "irrigationCost": "ಜಲಸಂಪನ್ಮೂಲ ವೆಚ್ಚ",
    "fertilizerCost": "ಜೈವಿಕಾಂಶ ವೆಚ್ಚ",
    "pesticideCost": "ಹೆಣ್ಣುವಾಡು ವೆಚ್ಚ",
    "totalInvestment": "ಒಟ್ಟು ಹೂಡಿಕೆ",
    //"roi": "ಹೂಡಿಕೆಯ ಮೇಲೆ ಹಿಂತಿರುಗುವ ಲಾಭ (ROI)",
    //"harvestingCost": "ಕಬ್ಬಿಣ ವೆಚ್ಚ",
    "transportCost": "ಬೇಲುದಾರಿ ವೆಚ್ಚ"
  },
  "placeholders": {
    "quantity": "ಮಾತು(in Kg)",
    "price": "ಪ್ರತಿ ಯೂನಿಟ್ ಬೆಲೆ",
    "landSize": "ಭೂಮಿಯ ಗಾತ್ರ (ಎಕರೆ)",
    "landCost":"ಭೂಮಿ ವೆಚ್ಚವನ್ನು ನಮೂದಿಸಿ",
    "seedCost": "ಬೀಯು ವ್ಯಯ(for 1 acre)",
    "fertilizerCost": "ಉಪಕಾರ ವ್ಯಯ(for 1 acre)",
    "fertilizerQuantityPerAcre":"ಪ್ರತಿ ಎಕರೆಗೆ ರಸಗೊಬ್ಬರ ಪ್ರಮಾಣ",
    "fertilizerCostPerUnit":"ಪ್ರತಿ ಘಟಕಕ್ಕೆ ರಸಗೊಬ್ಬರದ ವೆಚ್ಚ",

    "laborCost": "ಶ್ರಮ ವ್ಯಯ",
    "waterCost": "ನೀರು ವ್ಯಯ (for 1 acre)",
    "loanAmount": "ಕಡಿತ ಮೊತ್ತ",
    "interestRate": "ಬಡ್ಡಿದರ (%)",
    "durationMonths": "ಅವಧಿ (ತಿಂಗಳು)",
    "expectedYieldPerAcre": "ಪ್ರತಿ ಎಕರೆ ಉತ್ಪಾದನೆ (ಕೆ.ಜಿ.)",
    "cropType": "ಮೂಡಲ ಪ್ರಕಾರ",
    "commodity": "ಸಾಮಾನು",
    "waterUsagePerAcre": "ಪ್ರತಿ ಎಕರೆ ನೀರಿನ ಬಳಕೆ(in litres)",
    "costPerLiter": "ಪ್ರತಿ ಲೀಟರ್ ವೆಚ್ಚ",
    "pesticideAmountPerAcre": "ಪಪ್ರತಿ ಎಕರೆಗೆ ಕೀಟನಾಶಕ ಪ್ರಮಾಣ (ಕೆಜಿಯಲ್ಲಿ)",
    "pesticideCostPerUnit": "ಪ್ರತಿ ಯೂನಿಟ್ ಹಣ್ಣಿನ ಆಹಾರ ವೆಚ್ಚ",
    "pesticideCostPerLiter":"ಕೀಟನಾಶಕ ವೆಚ್ಚ",
    "totalInvestment": "ಒಟ್ಟು ಹೂಡಿಕೆ",
    "profit": "ಲಾಭ",
    "equipmentCost": "ಉಪಕರಣ ವೆಚ್ಚ",
    "distance": "ಅಂತರ (ಕೆ.ಮೀ.)",
    "fuelCostPerKm": "ಪ್ರತಿ ಕಿ.ಮೀ ಇಂಧನ ವೆಚ್ಚ"
  }
},
ta: {
  "title": "\u0B95\u0BBF\u0BB7\u0BBF \u0B95\u0BA3\u0BBF\u0BAA\u0BCD\u0B9F\u0BCD\u0B9F\u0BB0\u0BCD",
  "language": "மொழி",
  "selectCalculation": "கணக்கீட்டை தேர்ந்தெடுக்கவும்",
  "calculate": "கணக்கீடு செய்",
  "reset": "மீட்டமை",
  "result": "\u0B95\u0BBF\u0BB3\u0BC8\u0BB5\u0BC1",
  "error": "\u0BAA\u0BBF\u0B43\u0BB4\u0BC8",
  "calculationTypes": {
    "profit": "பட்டியல்",
    "cropCost": "\u0BAA\u0B9F\u0BB0\u0BCD \u0B9A\u0BC6\u0BB2\u0BB5\u0BC1",
    "loan": "கடன் EMI",
    "yield": "\u0BB5\u0BB3\u0BC8\u0B9E\u0BCD\u0B9A\u0BB2\u0BCD",
    "marketPrice": "சந்தை விலை",
    "subsidy": "உதவித் தகவல்",
    "irrigationCost": "நீரூசித் செலவு",
    "fertilizerCost": "பருத்தி செலவு",
    "pesticideCost": "பருக்கம் செலவு",
    "totalInvestment": "மொத்த முதலீடு",
    //"roi": "முதலீட்டில் திரும்பும் லாபம் (ROI)",
    //"harvestingCost": "கழிவு செலவு",
    "transportCost": "\u0BAA\u0B95\u0BCD\u0B95\u0BC1\u0BB5\u0BB0\u0BA4\u0BCD\u0BA4\u0BC1 \u0B9A\u0BC6\u0BB2\u0BB5\u0BC1"
  },
  "placeholders": {
    "quantity": "அளவு(in Kg)",
    "price": "ஒரு அலகுக்கு விலை",
    "landSize": "காடையின் பரப்பளவு (ஏக்கர்)",
    "landCost":"நிலத்தின் செலவை உள்ளிடவும்",
    "seedCost": "\u0BB5\u0BBF\u0BA4\u0BC8 \u0B9A\u0BC6\u0BB2\u0BB5\u0BC1",
    "fertilizerCost": "பருத்தி செலவு(for 1 acre)",
    "fertilizerQuantityPerAcre":"ஒரு ஏக்கருக்கு உரத்தின் அளவு",
    "fertilizerCostPerUnit":"ஒவ்வொரு பிரிவிற்கும் உரத்தின் செலவு",

    "laborCost": "தொழிலாளர் செலவு",
    "waterCost": "நீர் செலவு (for 1 acre)",
    "loanAmount": "கடன் தொகை",
    "interestRate": "வட்டி விகிதம் (%)",
    "durationMonths": "காலம் (மாதம்)",
    "expectedYieldPerAcre": "ஒரு ஏக்கர் விளைவு (கி.கி.)",
    "cropType": "\u0BAA\u0B9F\u0BB0\u0BCD \u0BB5\u0B95\u0BC8",
    "commodity": "\u0BAA\u0BC6\u0BB0\u0BC1\u0BB3\u0BCD",
    "waterUsagePerAcre": "ஒரு ஏக்கருக்கு நீர் பயன்பாடு(in litres)",
    "costPerLiter": "ஒரு லிட்டருக்கு செலவு",
    "pesticideAmountPerAcre": "ஒரு ஏக்கருக்கு பூச்சிக்கொல்லி அளவு (கிலோகிராம்களில்)",
    "pesticideCostPerUnit": "ஒரு அலகுக்கு பருக்கம் செலவு",
    "pesticideCostPerLiter":"\u0baa\u0bc2\u0b9a\u0bcd\u0b9a\u0bbf\u0b95\u0bca\u0bb2\u0bcd\u0bb2\u0bbf \u0b9a\u0bc6\u0bb2\u0bb5\u0bc1",
    "totalInvestment": "மொத்த முதலீடு",
    "profit": "பட்டியல்",
    "equipmentCost": "கருவி செலவு",
    "distance": "தூரம் (கி.மீ)",
    "fuelCostPerKm": "ஒரு கி.மீ எரிபொருள் செலவு"
  }
}
};

function Calculator() {
  const [calculationType, setCalculationType] = useState('');
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('en');

  const t = translations[language]; // Get translations for selected language

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle language selection
  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': language,
        },
        body: JSON.stringify({ ...formData, calculationType }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || t.error);
      }

      const data = await response.json();
      setResult(data.message);
    } catch (err) {
      setError(err.message);
      setResult('');
    }
  };

  // Reset form
  const handleBack = () => {
    setCalculationType('');
    setFormData({});
    setResult('');
    setError('');
  };

  return (
    <div className="calculator-container">
      <h1>{t.title}</h1>

      <label htmlFor="language">{t.language}:</label>
      <select id="language" value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
        <option value="te">తెలుగు</option>
        <option value="ka">ಕನ್ನಡ</option>
        <option value="ta">தமிழ்</option>
      </select>


      <form onSubmit={handleSubmit}>
        <label htmlFor="calculationType">{t.selectCalculation}:</label>
        <select
          id="calculationType"
          value={calculationType}
          onChange={(e) => setCalculationType(e.target.value)}
          required
        >
          
          <option value="">{t.selectCalculation}</option>
          {Object.entries(t.calculationTypes).map(([key, value]) => (
            <option key={key} value={key}>{value}</option>
          ))}
        </select>

        {calculationType && (
          <div>
            {calculationType === 'profit' && (
              <>
                <input type="number" name="quantity" placeholder={t.placeholders.quantity} onChange={handleInputChange} required />
                <input type="number" name="price" placeholder={t.placeholders.price} onChange={handleInputChange} required />
              </>
            )}
            {calculationType === 'cropCost' && (
              <>
                <input type="number" name="landSize" placeholder={t.placeholders.landSize} onChange={handleInputChange} required />
                <input type="number" name="seedCost" placeholder={t.placeholders.seedCost} onChange={handleInputChange} required />
                <input type="number" name="fertilizerCost" placeholder={t.placeholders.fertilizerCost} onChange={handleInputChange} required />
              </>
            )}
            {calculationType === 'loan' && (
              <>
                <input type="number" name="loanAmount" placeholder={t.placeholders.loanAmount} onChange={handleInputChange} required />
                <input type="number" name="interestRate" placeholder={t.placeholders.interestRate} onChange={handleInputChange} required />
                <input type="number" name="durationMonths" placeholder={t.placeholders.durationMonths} onChange={handleInputChange} required />
              </>
            )}

            {calculationType === 'yield' && (
              <>
                <input type="number" name="landSize" placeholder={t.placeholders.landSize} onChange={handleInputChange} required />
                <input type="number" name="expectedYieldPerAcre" placeholder={t.placeholders.expectedYieldPerAcre} onChange={handleInputChange} required />
              </>
            )}

            {calculationType === 'subsidy' && (
              <input type="text" name="cropType" placeholder={t.placeholders.cropType} onChange={handleInputChange} required />
            )}
            {calculationType === 'marketPrice' && (
              <input type="text" name="commodity" placeholder={t.placeholders.commodity} onChange={handleInputChange} required />
            )}
            {calculationType === 'irrigationCost' && (
              <>
                <input type="number" name="landSize" placeholder={t.placeholders.landSize}onChange={handleInputChange} required />
                <input type="number" name="waterUsagePerAcre" placeholder={t.placeholders.waterUsagePerAcre} onChange={handleInputChange} required />
                <input type="number" name="costPerLiter" placeholder={t.placeholders.costPerLiter} onChange={handleInputChange} required />
              </>
            )}
          {calculationType === 'fertilizerCost' && (
  <>
    <input
      type="number"
      name="fertilizerQuantityPerAcre"
      placeholder={t.placeholders.fertilizerQuantityPerAcre}
      onChange={handleInputChange}
      required
    />
    <input
      type="number"
      name="fertilizerCostPerUnit"
      placeholder={t.placeholders.fertilizerCostPerUnit}
      onChange={handleInputChange}
      required
    />
    <input
      type="number"
      name="landSize"
      placeholder={t.placeholders.landSize}
      onChange={handleInputChange}
      required
    />
  </>
)}
            {calculationType === 'pesticideCost' && (
              <>
                <input type="number" name="pesticideAmountPerAcre" placeholder={t.placeholders.pesticideAmountPerAcre} onChange={handleInputChange} required />
                <input type="number" name="pesticideCostPerLiter" placeholder={t.placeholders.pesticideCostPerLiter}onChange={handleInputChange} required />
                <input type="number" name="landSize" placeholder={t.placeholders.landSize} onChange={handleInputChange} required />
              </>
            )}
            {calculationType === 'totalInvestment' && (
              <>
                <input type="number" name="landSize" placeholder={t.placeholders.landSize} onChange={handleInputChange} required />
                <input type="number" name="equipmentCost" placeholder={t.placeholders.equipmentCost} onChange={handleInputChange} required />
                <input type="number" name="seedCost" placeholder={t.placeholders.seedCost} onChange={handleInputChange} required />
                <input type="number" name="fertilizerCost" placeholder={t.placeholders.fertilizerCost} onChange={handleInputChange} required />
                <input type="number" name="landCost" placeholder={t.placeholders.landCost} onChange={handleInputChange} required />
                <input type="number" name="waterCost" placeholder={t.placeholders.waterCost}onChange={handleInputChange} required />
                <input type="number" name="laborCost" placeholder={t.placeholders.laborCost} onChange={handleInputChange} required />
              </>
            )}
            
            {calculationType === 'transportCost' && (
              <>
                <input type="number" name="distance" placeholder={t.placeholders.distance} onChange={handleInputChange} required />
                <input type="number" name="fuelCostPerKm" placeholder={t.placeholders.fuelCostPerKm} onChange={handleInputChange} required />
              </>
            )}
          </div>
        )}

        <button type="submit">{t.calculate}</button>
      </form>

      {error && <p className="error">{t.error}: {error}</p>}
      {result && <p className="result">{t.result}: {result}</p>}

      {calculationType && <button onClick={handleBack}>{t.reset}</button>}
    </div>
  );
}
export default Calculator;
