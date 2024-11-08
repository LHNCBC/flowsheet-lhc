## LHC Flowsheet App

The LHC Flowsheet is a tool that talks to a FHIR server, and loads the Observations for a selected patient into a flowsheet. This project is not currently active. Many planned features were not implemented and it might have unknown bugs. We are releasing it as an open-source software as we have seen interest in this project from the FHIR community. We are only able to provide limited support for this project. Use it at your own risk.

The LHC Flowsheet was being developed by the Lister Hill National Center for Biomedical
Communications ([LHNCBC](https://lhncbc.nlm.nih.gov)), National Library of
Medicine ([NLM](https://www.nlm.nih.gov)), part of the National Institutes of
Health ([NIH](https://www.nih.gov))

## Licensing and Copyright Notice

See [LICENSE.md](LICENSE.md).

## Development
- It depends on forks of two third-party projects, the changes in which have not yet been submitted back to the original projects. See [react-sparklines](https://github.com/LHNCBC/react-sparklines-lhc), and [react-window](https://github.com/LHNCBC/react-window-lhc/tree/with-fixed-columns-and-rows)
- By default it talks to the FHIR server at "https://lforms-fhir.nlm.nih.gov/baseR4", which URL is hard-coded in `src/stores/fhirDataStore.js`.
- `c17.js` and `h17.js` in `src/stores` are the two hierarchy template files. They are not supposed to be edited manually, but the feature to customize the template was not implemented.
- Run `npm run start` for a dev server. Navigate to `http://localhost:3000/`.
- Run `npm run build` to build the project and generate a production version. The LHC Flowsheet app does not have server-side code. The built client-side code are in the `build` directory. You can host it on a web server of your choice.
- There are no tests for the code.


