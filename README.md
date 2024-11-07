## LHC Flowsheet App

The LHC Flowsheet is tool that talks to a FHIR server, and loads the Observations for a selected patient into a flowsheet. This project is no longer active at LHC. One key feature (customized hierarchy template) was not implemented and it might have unknown bugs. We are releasing it as an open-source software as we have seen interests in this project from the FHIR community. We are only able to provide limited support for this project. Use at your own risk.

It is being developed by the Lister Hill National Center for Biomedical
Communications ([LHNCBC](https://lhncbc.nlm.nih.gov)), National Library of
Medicine ([NLM](https://www.nlm.nih.gov)), part of the National Institutes of
Health ([NIH](https://www.nih.gov))

## Licensing and Copyright Notice

See [LICENSE.md](LICENSE.md).

## Development
- It depends on two projects that were forked from the original projects from github but were never got a chance to merge into the original projects. See [react-sparklines](https://github.com/LHNCBC/react-sparklines-lhc), and [react-window](https://github.com/LHNCBC/react-window-lhc/tree/with-fixed-columns-and-rows)
- Run `npm run start` for a dev server. Navigate to `http://localhost:3000/`.
- By default it talks to the FHIR server at "https://lforms-fhir.nlm.nih.gov/baseR4". It's hard-coded in src/stores/fhirDataStore.js
- Run `npm run build` to build the project and generate a production version
- Tests are available.


