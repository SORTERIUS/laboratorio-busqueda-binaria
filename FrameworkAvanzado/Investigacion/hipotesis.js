const promedioCodeless = 180;

const promedioTradicional = (
    150 + 120
) / 2;

console.log(
    "ROI TestCraft:",
    promedioCodeless
);

console.log(
    "ROI Jasmine/Selenium:",
    promedioTradicional
);

if (
    promedioCodeless >
    promedioTradicional
) {

    console.log(
        "\nSe acepta la hipótesis H1"
    );

}
else {

    console.log(
        "\nSe acepta la hipótesis H0"
    );

}