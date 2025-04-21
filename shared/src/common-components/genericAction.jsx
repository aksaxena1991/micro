import { Download, Preview, Share } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { Grid, Hidden } from "@mui/material";
import { useSelector } from "react-redux";
import OBJ from "../../languages/fr.json";
import { getAuthState } from "../../store/selectors";
import { getAuthFeatureList } from "../../utils";
import GenericDropdown from "./genericDropdown";
import GenericLoadingButton from "./genericLoadingButton";
const GenericAction = (props) => {
  const {
    data,
    onStatusChangeHandler,
    onDeleteHandler,
    onPreviewHandler,
    onDownloadHandler,
    onShareHandler,
    onViewHandler,
    onEditHandler,
    sx,
  } = props;

  const auth = useSelector(getAuthState);
  const { authDetails } = auth;
  const featureList = getAuthFeatureList(authDetails);
  let features = featureList?.map((ele) =>
    ele?.featureName !== null ? ele.featureName : ""
  );
  features = new Set(features);
  const featureArray = Array.from(features)?.map((it) =>
    it.split(" ").join("-").toLowerCase()
  );
  const isDelete = featureArray.includes("delete");
  const isUpdate = featureArray.includes("update");
  const isShare = featureArray.includes("share");
  const isDownload = featureArray.includes("download");
  const isPreview = featureArray.includes("preview");
  const isStatus = featureArray.includes("status");
  const isView = featureArray.includes("view");

  return (
    <Grid
      container
      spacing={2}
      sx={{ paddingTop: "15px", display: "flex", ...sx }}
    >
      {isStatus && (
        <Grid item sm={2}>
          <GenericDropdown
            data={OBJ.STATUS_LIST}
            onChange={(evt) => onStatusChangeHandler(evt, data)}
          />
        </Grid>
      )}

      {isUpdate && (
        <Grid item sm={2}>
          <EditIcon
            onClick={() => onEditHandler(data)}
            sx={{ color: (theme) => theme.palette.primary.dark }}
          />
        </Grid>
      )}

      {isDelete && (
        <Grid item sm={2}>
          <DeleteIcon
            onClick={() => onDeleteHandler(data)}
            sx={{ color: (theme) => theme.palette.primary.dark }}
          />
        </Grid>
      )}

      
        <Grid item sm={2}>
          <Preview
            onClick={() => onPreviewHandler(data)}
            sx={{ color: (theme) => theme.palette.primary.dark }}
          />
        </Grid>
      

      {isDownload && (
        <Grid item sm={2}>
          <Download
            onClick={() => onDownloadHandler(data)}
            sx={{ color: (theme) => theme.palette.primary.dark }}
          />
        </Grid>
      )}
      {isShare && (
        <Grid item sm={2}>
          <Share
            onClick={() => onShareHandler(data)}
            sx={{ color: (theme) => theme.palette.primary.dark }}
          />
        </Grid>
      )}
      {isView && (
        <Hidden mdUp smUp>
          <Grid item sm={2}>
            <GenericLoadingButton onClick={() => onViewHandler()}>
              View
            </GenericLoadingButton>
            {/* <TableViewIcon
              // onClick={() => onShareHandler(data)}
              sx={{ color: (theme) => theme.palette.primary.dark }}
            /> */}
          </Grid>
        </Hidden>
      )}
    </Grid>
  );
};
export default GenericAction;
