(function(React2, react) {
    "use strict";
    function extend_V2(renderExtensionCallback) {
      return self.extend_V2(renderExtensionCallback);
    }
    function serverless(name, options) {
      return self.serverless(name, options);
    }
    const hubspot = {
      extend: extend_V2,
      serverless
    };
    react.createRemoteReactComponent("Alert");
    react.createRemoteReactComponent("Button");
    react.createRemoteReactComponent("ButtonRow");
    react.createRemoteReactComponent("Card");
    react.createRemoteReactComponent("DescriptionList");
    react.createRemoteReactComponent("DescriptionListItem");
    const Divider = react.createRemoteReactComponent("Divider");
    react.createRemoteReactComponent("EmptyState");
    react.createRemoteReactComponent("ErrorState");
    react.createRemoteReactComponent("Form");
    react.createRemoteReactComponent("Heading");
    react.createRemoteReactComponent("Image");
    react.createRemoteReactComponent("Input");
    const Link = react.createRemoteReactComponent("Link");
    react.createRemoteReactComponent("TextArea");
    react.createRemoteReactComponent("Textarea");
    react.createRemoteReactComponent("LoadingSpinner");
    react.createRemoteReactComponent("ProgressBar");
    react.createRemoteReactComponent("Select");
    react.createRemoteReactComponent("Tag");
    const Text = react.createRemoteReactComponent("Text");
    react.createRemoteReactComponent("Tile");
    react.createRemoteReactComponent("Stack");
    react.createRemoteReactComponent("ToggleGroup");
    react.createRemoteReactComponent("StatisticsItem");
    react.createRemoteReactComponent("Statistics");
    react.createRemoteReactComponent("StatisticsTrend");
    const Table = react.createRemoteReactComponent("Table");
    react.createRemoteReactComponent("TableFooter");
    const TableCell = react.createRemoteReactComponent("TableCell");
    const TableRow = react.createRemoteReactComponent("TableRow");
    const TableBody = react.createRemoteReactComponent("TableBody");
    const TableHeader = react.createRemoteReactComponent("TableHeader");
    const TableHead = react.createRemoteReactComponent("TableHead");
    react.createRemoteReactComponent("NumberInput");
    react.createRemoteReactComponent("Box");
    react.createRemoteReactComponent("StepIndicator");
    react.createRemoteReactComponent("Accordion");
    react.createRemoteReactComponent("MultiSelect");
    react.createRemoteReactComponent("Flex");
    react.createRemoteReactComponent("DateInput");
    react.createRemoteReactComponent("Checkbox");
    react.createRemoteReactComponent("RadioButton");
    react.createRemoteReactComponent("List");
    react.createRemoteReactComponent("Toggle");
    react.createRemoteReactComponent("Dropdown");
    react.createRemoteReactComponent("Panel");
    react.createRemoteReactComponent("PanelFooter");
    react.createRemoteReactComponent("PanelBody");
    react.createRemoteReactComponent("PanelSection");
    react.createRemoteReactComponent("StepperInput");
    var ServerlessExecutionStatus;
    (function(ServerlessExecutionStatus2) {
      ServerlessExecutionStatus2["Success"] = "SUCCESS";
      ServerlessExecutionStatus2["Error"] = "ERROR";
    })(ServerlessExecutionStatus || (ServerlessExecutionStatus = {}));
    hubspot.extend(({ context, runServerlessFunction, actions }) => /* @__PURE__ */ React2.createElement(
      Extension,
      {
        context,
        runServerless: runServerlessFunction,
        sendAlert: actions.addAlert
      }
    ));
    const Extension = ({ context, runServerless, sendAlert }) => {
      React2.useState("");
      return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(Text, null, /* @__PURE__ */ React2.createElement(Text, { format: { fontWeight: "bold" } }, "Your first UI extension is ready!"), "Congratulations, ", context.user.firstName, "! You just deployed your first HubSpot UI extension. This example demonstrates how you would send parameters from your React frontend to the serverless function and get a response back."), /* @__PURE__ */ React2.createElement(Divider, null), /* @__PURE__ */ React2.createElement(
        Table,
        {
          bordered: true,
          paginated: false
        },
        /* @__PURE__ */ React2.createElement(TableHead, null, /* @__PURE__ */ React2.createElement(TableRow, null, /* @__PURE__ */ React2.createElement(TableHeader, null, "Name"), /* @__PURE__ */ React2.createElement(TableHeader, null, "Role"))),
        /* @__PURE__ */ React2.createElement(TableBody, null, /* @__PURE__ */ React2.createElement(TableRow, null, /* @__PURE__ */ React2.createElement(TableCell, null, "Tim Robinson"), /* @__PURE__ */ React2.createElement(TableCell, null, "Driver's Ed. Instructor")), /* @__PURE__ */ React2.createElement(TableRow, null, /* @__PURE__ */ React2.createElement(TableCell, null, "Patti Harrison"), /* @__PURE__ */ React2.createElement(TableCell, null, "Tables (vendor)")), /* @__PURE__ */ React2.createElement(TableRow, null, /* @__PURE__ */ React2.createElement(TableCell, null, "Sam Richardson"), /* @__PURE__ */ React2.createElement(TableCell, null, "Show host")), /* @__PURE__ */ React2.createElement(TableRow, null, /* @__PURE__ */ React2.createElement(TableCell, null, "Ruben Rabasa"), /* @__PURE__ */ React2.createElement(TableCell, null, "Car test")))
      ), /* @__PURE__ */ React2.createElement(Divider, null), /* @__PURE__ */ React2.createElement(Text, null, "What now? Explore all available", " ", /* @__PURE__ */ React2.createElement(Link, { href: "https://developers.hubspot.com/docs/platform/ui-extension-components" }, "UI components"), ", get an overview of", " ", /* @__PURE__ */ React2.createElement(Link, { href: "https://developers.hubspot.com/docs/platform/ui-extensions-overview" }, "UI extensions"), ", learn how to", " ", /* @__PURE__ */ React2.createElement(Link, { href: "https://developers.hubspot.com/docs/platform/create-ui-extensions" }, "add a new custom card"), ", jump right in with our", " ", /* @__PURE__ */ React2.createElement(Link, { href: "https://developers.hubspot.com/docs/platform/ui-extensions-quickstart" }, "Quickstart Guide"), ", or check out our", " ", /* @__PURE__ */ React2.createElement(Link, { href: "https://github.com/HubSpot/ui-extensions-react-examples" }, "code Samples"), "."));
    };
  })(React, RemoteUI);