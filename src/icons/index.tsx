import { SvgIconProps } from "@material-ui/core";

import { WindowType } from "types";

import Chart from "./chart";
import Flux from "./flux";
import QuotesTable from "./quotesTable";
import TwitterSearch from "./twitterSearch";

const typeIconsMap = (
  props: SvgIconProps
): { [x in WindowType]: JSX.Element } => ({
  flux: <Flux {...props} />,
  chart: <Chart {...props} />,
  twittersearch: <TwitterSearch {...props} />,
  quotestable: <QuotesTable {...props} />,
});

export { Chart, Flux, QuotesTable, TwitterSearch, typeIconsMap };
