import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { Box, Typography } from "@mui/material";
import { Fragment, useRef, useState } from "react";
import OBJ from "../../languages/fr.json";

const style = {
  padding: "8px",
  width: "95%",
  height: "150px",
  border: "2px dashed",
  letterSpacing: "5px",
  borderColor: (theme) => theme.palette.primary.dark,
  borderRadius: "8px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const GenericImagePicker = ({ getImageUrl, sx, isCompressed, ...rest }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [fileObject, setFileObject] = useState(null);
  const imageRef = useRef(null);

  const handleImageClick = () => {
    imageRef.current.value = "";
    imageRef.current.click();
  };

  const handleImageChange = async (evt) => {
    const file = evt.target.files[0];
    if (file) {
      try {
        const base64String = await imageToBase64(file);
        setFileObject(file);
        setImageUrl(base64String);
        getImageUrl(base64String);
      } catch (error) {
        console.error("Error converting image to Base64:", error);
      }
    }
  };

  const imageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <Box sx={{ ...sx }}>
        <Box sx={style} className="anubhav-saxena" onClick={handleImageClick}>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            {...rest}
            ref={imageRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />

          {imageUrl ? (
            <img
              alt={fileObject?.name || "Selected Image"}
              src={imageUrl}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "150px",
                maxWidth: "100px",
                objectFit: "cover",
              }}
            />
          ) : (
            <CloudUploadOutlinedIcon
              size={30}
              style={{ color: (theme) => theme.palette.primary.dark }}
            />
          )}

          <Typography
            variant="body1"
            sx={{ color: (theme) => theme.palette.primary.dark }}
          >
            {OBJ.BROWSE_FILES_LABEL}
          </Typography>
        </Box>

        {fileObject && (
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              color: (theme) => theme.palette.primary.dark,
              textAlign: "center",
              textOverflow: "inherit",
            }}
          >
            {fileObject.name}
          </Typography>
        )}
      </Box>
    </Fragment>
  );
};

export default GenericImagePicker;
