import React, { useRef, useState } from "react";
import Modal from "@material-ui/core/Modal";
import Dropzone from "react-dropzone";
import Cropper from "react-cropper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "cropperjs/dist/cropper.css";

import styles from "./styles";
import { FieldLabel } from "components/display/styles";

type ThumbnailPickerProps = {
  value: string;
};
const ThumbnailPicker: React.FC<ThumbnailPickerProps> = ({ value }) => {
  const cropperRef = useRef<HTMLImageElement & { cropper: any }>(null);
  const [croppedImg, setCrop] = useState("");
  const [isModalOpen, showModal] = useState(false);
  const [file, setFile] = useState("");

  const classes = styles();

  const handleCrop = () => {
    if (cropperRef && cropperRef.current) {
      setCrop(
        cropperRef.current.cropper
          .getCroppedCanvas({ minHeight: 460, minWidth: 460 })
          .toDataURL()
      );
      showModal(false);
    } else {
      showModal(false);
    }
  };

  const handleFile = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setFile(reader.result as any);
      showModal(true);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <div>
      <FieldLabel>Thumbnail</FieldLabel>
      <Dropzone
        multiple={false}
        onDrop={(acceptedFiles) => {
          setFile(URL.createObjectURL(acceptedFiles[0]));
          showModal(true);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div>
            <div {...getRootProps({ className: classes.dropStyle })}>
              <Typography variant="subtitle1" className={classes.dropText}>
                Drag & Drop an Image Here
              </Typography>
              {(croppedImg || value) && (
                <img className={classes.image} src={croppedImg || value}></img>
              )}
              <input {...getInputProps({ onChange: handleFile })} />
            </div>
            <Modal
              className={classes.modal}
              open={isModalOpen}
              onClose={() => showModal(false)}
            >
              <div className={classes.modalBody}>
                <Typography className={classes.modalTitle} variant="subtitle2">
                  Upload thumbnail
                </Typography>
                <Cropper
                  src={file}
                  ref={cropperRef}
                  aspectRatio={1}
                  className={classes.cropper}
                  preview=".img-preview"
                  dragMode="move"
                  guides={false}
                  viewMode={1}
                  cropBoxMovable={false}
                  cropBoxResizable={false}
                  minCropBoxWidth={460}
                  minCropBoxHeight={460}
                />
                <Box className={classes.buttonsContainer}>
                  <Button onClick={() => showModal(false)}>cancel</Button>
                  <Button
                    onClick={() => {
                      handleCrop();
                      showModal(false);
                    }}
                  >
                    confirm
                  </Button>
                </Box>
              </div>
            </Modal>
          </div>
        )}
      </Dropzone>
    </div>
  );
};

export default ThumbnailPicker;
