import { SvgIconProps } from "@material-ui/core";

import { WindowType } from "types";

import Chart from "./chart";
import Flux from "./flux";
import QuotesTable from "./quotesTable";
import TwitterSearch from "./twitterSearch";

const typeIconsMap = (
  props: SvgIconProps
): { [x in WindowType]: JSX.Element } => ({
  Flux: <Flux {...props} />,
  Chart: <Chart {...props} />,
  "Twitter Search": <TwitterSearch {...props} />,
  "Quotes Table": <QuotesTable {...props} />,
});

export { Chart, Flux, QuotesTable, TwitterSearch, typeIconsMap };
