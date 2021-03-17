import {
  Box,
  styled,
  FormControl,
  OutlinedInput,
  Typography,
  TextField,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

export const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "calc(52% - 12.5px) calc(48% - 12.5px)",
  gap: "25px",
  gridTemplateAreas: `
  'search snapshot'
  'description thumbnail'
  'tags categories'
  'onboarding status'
  `,
  paddingBottom: 140,
});

export const WindowSearchField = styled(FormControl)({
  gridArea: "search",
});

export const SnapshotField = styled(FormControl)({
  gridArea: "snapshot",
});

export const ThumbnailField = styled(FormControl)({
  gridArea: "thumbnail",
});

export const TrashIcon = styled(DeleteIcon)(({ theme }) => ({
  cursor: "pointer",
  color: theme.palette.grey[700],
}));

export const SearchFormControl = styled(FormControl)({
  gridArea: "search",
});

export const SnapshotFormControl = styled(FormControl)({
  gridArea: "snapshot",
});

export const DescriptionFormControl = styled(FormControl)({
  gridArea: "description",
});

export const ThumbnailFormControl = styled(FormControl)({
  gridArea: "thumbnail",
});

export const TagsFormControl = styled(FormControl)({
  gridArea: "tags",
});

export const CategoriesFormControl = styled(FormControl)({
  gridArea: "categories",
});

export const OnboardingFormControl = styled(FormControl)({
  gridArea: "onboarding",
});

export const StatusFormControl = styled(FormControl)({
  gridArea: "status",
});

export const DescriptionValidator = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "right",
  color: theme.palette.grey[700],
}));

export const DescriptionInput = styled(OutlinedInput)(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.15px",
  color: theme.palette.grey[700],
  alignItems: "normal",
  flex: 1,
}));

export const SelectedOnboardingList = styled(Box)({
  display: "flex",
  width: "100%",
  flexDirection: "column",
});

export const SelectedOnboardingHeader = styled(Box)({
  display: "flex",
  marginBottom: "4px",
  marginTop: "13px",
});

export const HeaderLayoutsText = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.4px",
  textTransform: "uppercase",
  color: theme.palette.grey[500],
  flex: 4,
}));

export const HeaderRankText = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontWeight: "bold",
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.4px",
  textTransform: "uppercase",
  color: theme.palette.grey[500],
  flex: 1,
}));

export const SelectedOnboardingListContainer = styled(Box)({ flex: 1 });

export const ListCellContainer = styled(Box)({
  display: "flex",
  width: "100%",
  marginBottom: "9px",
});

export const OnboardingNameDeleteContainer = styled(Box)(({ theme }) => ({
  flex: 4,
  display: "flex",
  flexDirection: "row",
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  alignItems: "center",
  marginLeft: "16px",
  marginRight: "13px",
}));

export const OnboardingRankTextField = styled(TextField)({
  flex: 1,
});

export const StatusContainer = styled(Box)({
  marginLeft: "16px",
});

export const StatusOptionContainer = styled(FormControl)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  borderBottom: `1px solid ${theme.palette.grey[200]}`,
  alignItems: "center",
  height: "45px",
}));

export const StatusTitle = styled(Typography)({
  flex: 1,
});

export const SelectedOnboardingName = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.25px",
  color: theme.palette.grey[900],
  flex: 1,
}));
