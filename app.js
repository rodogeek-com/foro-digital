document.addEventListener("DOMContentLoaded", () => {

  const countryData = {

    MX: {
      name: "México",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    CO: {
      name: "Colombia",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    CL: {
      name: "Chile",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    AR: {
      name: "Argentina",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    PE: {
      name: "Perú",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    BR: {
      name: "Brasil",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    UY: {
      name: "Uruguay",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    PY: {
      name: "Paraguay",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    BO: {
      name: "Bolivia",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    EC: {
      name: "Ecuador",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    VE: {
      name: "Venezuela",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    PA: {
      name: "Panamá",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    CR: {
      name: "Costa Rica",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    NI: {
      name: "Nicaragua",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    HN: {
      name: "Honduras",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    SV: {
      name: "El Salvador",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    GT: {
      name: "Guatemala",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    DO: {
      name: "República Dominicana",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    },

    PR: {
      name: "Puerto Rico",
      status: "Buscando líder para el capítulo",
      speakers: 0,
      events: 0
    }

  };

  const svgObject = document.getElementById("latam-svg");

  if (!svgObject) {
    console.log("Mapa LATAM no encontrado.");
    return;
  }

  svgObject.addEventListener("load", () => {

    const svgDoc = svgObject.contentDocument;

    if (!svgDoc) {
      console.log("No fue posible acceder al SVG.");
      return;
    }

    const countryName =
      document.getElementById("country-name");

    const countryStatus =
      document.getElementById("country-status");

    const countrySpeakers =
      document.getElementById("country-speakers");

    const countryEvents =
      document.getElementById("country-events");

    Object.keys(countryData).forEach(code => {

      const country = svgDoc.getElementById(code);

      if (!country) return;

      country.style.fill = "#84CC16";
      country.style.cursor = "pointer";
      country.style.transition =
        "fill .25s ease, opacity .25s ease";

      country.addEventListener("mouseenter", () => {

        if (!country.classList.contains("selected")) {

          country.style.fill = "#12B886";

        }

      });

      country.addEventListener("mouseleave", () => {

        if (!country.classList.contains("selected")) {

          country.style.fill = "#84CC16";

        }

      });

      country.addEventListener("click", () => {

        svgDoc
          .querySelectorAll("path")
          .forEach(path => {

            path.classList.remove("selected");

            path.style.fill = "#84CC16";

          });

        country.classList.add("selected");

        country.style.fill = "#0F766E";

        const info = countryData[code];

        countryName.textContent =
          info.name;

        countryStatus.textContent =
          info.status;

        countrySpeakers.textContent =
          info.speakers;

        countryEvents.textContent =
          info.events;

      });

    });

    console.log("Mapa LATAM inicializado");

  });

});
