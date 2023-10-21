const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const accountNumber = "+254 727 900 800";

app.post("/", (req, res) => {
    const { sessionId, serviceCode, phoneNumber, text } = req.body;
    let response = "";

    if (text === "") {
        response =
            "CON Welcome to farmer's Choice. Please select one option to continue ? \n1. Weather Update \n2. Crop Prices \n3. Crop Advices \n4. Market Location"
    } else if (text === "1") {
        response =
            //   "CON Choose hospital information you want to contact: \n1. Mercy General hospital \n2. Kiambu Level 5 \n3. Nairobi Women's Hospital ";
            `END The current weater in your location is 25 degrees, with a 30% chance of rain, and a 70% chance of sunshine, with a humidity of 50%, and a wind speed of 10km/h`;
    } else if (text === "2") {
        response =
            "CON Select crop category: \n1. Rice Prices \n2. Maize Prices \n3. Tomato Prices ";
    } else if (text === "3") {
        response =
            "CON Select one category: \n1. Planting Tips \n2. Fertilizer Advice \n3. Pest Control \n4. Harvesting Guidance";
    }
    else if (text === "4") {
        response =
            // `END For more information visit this  <u><a className="text-blue-500 " href="https://www.plannedparenthood.org/learn/health-and-wellness/sexual-and-reproductive-anatomy">Site</a></u>`;
            "CON Select one category: \n1. Local Famers Market \n2. City Wholesale Market \n3. County Agricultural Cooperative ";
    }
    else if (text === "2*1") {
        // const accountNumber = "+254 727 900 800";
        response = `END The current price of rice is Ksh 50 per kg in the local market`;
    }
    else if (text === "2*2") {

        response = `END The current price of maize is Ksh 2000 per 100Kg bag in the local market and Ksh 3000 per 100Kg bag in the city wholesale market`;
    }
    else if (text === "2*3") {
        // const accountNumber = "+254 727 900 800";
        response = `END The current price of tomatoes is Ksh 100 per kg in the local market and Ksh 150 per kg in the city wholesale market`;
    }
    else if (text === "3*1") {

        response = "CON Planting Tips: \n1. Maize Planting Tips \n2. Rice Planting Tips \n3. Tomatoes Planting Tips";
    }
    else if (text === "3*2") {

        response = "CON Fertilizer Advice: \n1. Maize Fertilizer Advice \n2. Rice Fertilizer Advice \n3. Tomatoes Fertilizer Advice";
    }
    else if (text === "3*3") {

        response = `END Pest Control: \n1. Pest Control should be done at the onset of rains \n2. Pest Control should be done in well drained soils \n3. Pest Control should be done in a sunny area`;
    }
    else if (text === "3*1*1") {
        response = `END Optimal \n1: planting season: Spring, \n2: Recommended spacing between plants: 30cm \n3: Ideal soil conditions: well drained loamy soil \n4: seed veriaty: Hybrid variety like XYZ-123`;
    }
    else if (text === "3*1*2") {
        response = `END Optimal \n1: planting season: Spring, \n2: Recommended spacing between plants: 20cm \n3: Ideal soil conditions: Flooded paddy fields \n4: seed veriaty: Short-green rice for cooler climates, long-graained rice for warmer regions`;
    }
    else if (text === "3*1*3") {
        response = `END Optimal \n1: planting season: Spring, \n2: Recommendes spacing between plants: 45cm \n3: Ideal soil conditions: well drained loamy soil \n4: seed veriaty: Roma tomatoes for paste, Cherry tomatoes for snacking, Beefsteak tomatoes`;
    }
    else if (text === "3*2*1") {
        response = `END Recommended \n1: N-P-K ratio: 15-15-15 \n2: Recommended application: 2 weeks after planting \n3: Quantity: 100Kg per Acre`;
    }
    else if (text === "3*2*2") {
        response = `END Recommended \n1: N-P-K ratio: 20-20-20 \n2: Apply a balanced fertilizer at the time of transplanting then apply nitrogen fertilizer in stages during growth cycle \n3: Quantity: 50Kg per Acre`;
    }
    else if (text === "3*2*3") {
        response = `END Recommended \n1: N-P-K ratio: 10-20-20 \n2: Apply a balanced fertilizer before planting then side-dress nitrogen when plants start flowering \n3: Quantity: 1 to 2 pounds per 100 square feet`;
    }
    else if (text === "4*1") {
        response = `END Address: Rafiki Farmers Market, Nakuru, Kenya \n: Operating Hours: 8am to 5pm \n: crop-types: vegetables, cereals, legumes \n: Contact: +254 727 900 800`;
    }
    else if (text === "4*2") {
        response = `END Address: Kampi-ya-moto Farmers Market, Nakuru, Kenya \n: Operating Hours: 8am to 5pm \n: crop-types: cereals, legumes \n: Contact: +254 727 433 432`;
    }
    // else if (text === "4*3") {
    //     response = `END Address: Kampi-ya-moto Farmers Market, Nakuru, Kenya \n: Operating Hours: 8am to 5pm \n: crop-types: cereals, legumes \n: Contact: +254 727 433 432`;
    // }
    else {
        response = "END Invalid input";
    }

    res.set("Content-Type", "text/plain");
    res.send(response);
});

const port = 3004;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});