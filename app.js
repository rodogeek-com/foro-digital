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
    console.log("Mapa LATAM no encontrado");
    return;
  }

  svgObject.addEventListener("load", () => {

    const svgDoc = svgObject.contentDocument;

    if (!svgDoc) {
      console.log("No se pudo cargar el SVG");
      return;
    }

    Object.keys(countryData).forEach(code => {

      const country = svgDoc.getElementById(code);

      if (!country) return;

      country.style.fill = "#84CC16";
      country.style.cursor = "pointer";
      country.style.transition = "all .25s ease";

      country.addEventListener("mouseenter", () => {

        country.style.fill = "#12B886";
        country.style.opacity = "0.9";

      });

      country.addEventListener("mouseleave", () => {

        country.style.fill = "#84CC16";
        country.style.opacity = "1";

      });

      country.addEventListener("click", () => {

        const info = countryData[code];

        const countryName =
          document.getElementById("country-name");

        const countryStatus =
          document.getElementById("country-status");

        const countrySpeakers =
          document.getElementById("country-speakers");

        const countryEvents =
          document.getElementById("country-events");

        if (countryName) {
          countryName.textContent = info.name;
        }

        if (countryStatus) {
          countryStatus.textContent = info.status;
        }

        if (countrySpeakers) {
          countrySpeakers.textContent = info.speakers;
        }

        if (countryEvents) {
          countryEvents.textContent = info.events;
        }

        svgDoc.querySelectorAll("path").forEach(path => {
          path.style.fill = "#84CC16";
        });

        country.style.fill = "#0F766E";

      });

    });

    console.log("Foro Digital LATAM cargado correctamente");

  });

});
