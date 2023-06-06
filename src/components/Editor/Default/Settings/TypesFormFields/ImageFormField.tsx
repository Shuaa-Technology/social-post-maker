import { useState } from "react";
import { FieldProps } from "../../../../Settings/TypesFormFields/TypeFormField";
import { FiImage, FiX } from "react-icons/fi";
import styles from "./ImageFormField.module.scss";

export default function ImageFormField(props: FieldProps) {
  const { id = "", name = "", value = "", handleOnChange } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    if (file) {
      handleOnChange(id, URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    handleOnChange(id, "");
  };

  return (
      <div className={styles.field}>
        <label htmlFor={id}>{name}</label>
        <div className={styles.uploadContainer}>
          <label htmlFor={`file-input-${id}`} className={styles.uploadButton}>
            <FiImage className={styles.uploadIcon} />
            Upload Image
          </label>
          <input
              type="file"
              accept="image/*"
              id={`file-input-${id}`}
              name={name}
              className={styles.fileInput}
              onChange={handleFileChange}
          />
          {(selectedFile || value) && (
              <div className={styles.filePreview}>
                <div className={styles.imageWrapper}>
                  {selectedFile && (
                      <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Selected File Preview"
                          className={styles.previewImage}
                      />
                  )}
                  {value && !selectedFile && (
                      <img
                          src={value}
                          alt="Selected File Preview"
                          className={styles.previewImage}
                      />
                  )}
                  <div
                      className={styles.removeIcon}
                      onClick={handleRemoveImage}
                  >
                    <FiX />
                  </div>
                </div>
              </div>
          )}
        </div>
      </div>
  );
}
