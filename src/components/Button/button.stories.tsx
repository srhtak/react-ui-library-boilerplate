// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from "@storybook/addon-actions";
import Button from ".";

const actionsData = {
  click: action("click")
};

export default {
  title: "MyComponents/Button",
  component: Button,
  on: {
    ...actionsData
  }
};

export const Primary = (): JSX.Element => (
  <>
    <Button variant="primary" onClick={action("click")}>
      Go
    </Button>
  </>
);

export const Secondary = (): JSX.Element => (
  <>
    <Button variant="secondary" onClick={action("click")}>
      Go
    </Button>
  </>
);

export const Default = (): JSX.Element => (
  <>
    <Button onClick={action("click")}>Go</Button>
  </>
);

export const Sizes = (): JSX.Element => (
  <>
    <Button onClick={action("click")} size="small">
      Go
    </Button>
    <Button onClick={action("click")} size="large">
      Go
    </Button>
  </>
);

export const DisabledAll = (): JSX.Element => (
  <>
    <Button disabled>Go</Button>
    <Button onClick={action("click")} variant="primary" disabled>
      Go
    </Button>
    <Button onClick={action("click")} variant="secondary" disabled>
      Go
    </Button>
  </>
);

export const Types = (): JSX.Element => (
  <>
    <Button onClick={action("click")} type="reset">
      Go
    </Button>
    <Button onClick={action("click")} type="submit">
      Go
    </Button>
  </>
);
