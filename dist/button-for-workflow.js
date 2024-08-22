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
    const Button = react.createRemoteReactComponent("Button");
    react.createRemoteReactComponent("ButtonRow");
    react.createRemoteReactComponent("Card");
    react.createRemoteReactComponent("DescriptionList");
    react.createRemoteReactComponent("DescriptionListItem");
    react.createRemoteReactComponent("Divider");
    react.createRemoteReactComponent("EmptyState");
    react.createRemoteReactComponent("ErrorState");
    react.createRemoteReactComponent("Form");
    react.createRemoteReactComponent("Heading");
    react.createRemoteReactComponent("Image");
    react.createRemoteReactComponent("Input");
    react.createRemoteReactComponent("Link");
    react.createRemoteReactComponent("TextArea");
    react.createRemoteReactComponent("Textarea");
    react.createRemoteReactComponent("LoadingSpinner");
    react.createRemoteReactComponent("ProgressBar");
    react.createRemoteReactComponent("Select");
    react.createRemoteReactComponent("Tag");
    react.createRemoteReactComponent("Text");
    react.createRemoteReactComponent("Tile");
    react.createRemoteReactComponent("Stack");
    react.createRemoteReactComponent("ToggleGroup");
    react.createRemoteReactComponent("StatisticsItem");
    react.createRemoteReactComponent("Statistics");
    react.createRemoteReactComponent("StatisticsTrend");
    react.createRemoteReactComponent("Table");
    react.createRemoteReactComponent("TableFooter");
    react.createRemoteReactComponent("TableCell");
    react.createRemoteReactComponent("TableRow");
    react.createRemoteReactComponent("TableBody");
    react.createRemoteReactComponent("TableHeader");
    react.createRemoteReactComponent("TableHead");
    react.createRemoteReactComponent("NumberInput");
    react.createRemoteReactComponent("Box");
    react.createRemoteReactComponent("StepIndicator");
    react.createRemoteReactComponent("Accordion");
    react.createRemoteReactComponent("MultiSelect");
    const Flex = react.createRemoteReactComponent("Flex");
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
      const handleClick = async () => {
        const dealId = context.crm.objectId;
        {
          console.log("dealId:" + dealId);
        }
        const { response } = await runServerless({ name: "myFunc", parameters: { dealId } });
        {
          console.log(response);
        }
        const message = response.status ? "success" : "error";
        sendAlert({ message });
      };
      return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(
        Flex,
        {
          direction: "row",
          justify: "center"
        },
        /* @__PURE__ */ React2.createElement(
          Button,
          {
            type: "submit",
            variant: "primary",
            onClick: handleClick
          },
          "Create Quote"
        )
      ));
    };
  })(React, RemoteUI);