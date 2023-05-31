// ImageFormField.tsx
import { useState } from "react";
import { FieldProps } from "../../../../Settings/TypesFormFields/TypeFormField";
import { FiImage } from "react-icons/fi"; // Import the desired React icon
import styles from "./ImageFormField.module.scss";

export default function ImageFormField(props: FieldProps) {
  const { id = "", name = "", value = "", handleOnChange } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    handleOnChange(id, e.currentTarget.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
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
          value=""
          className={styles.fileInput}
          onChange={handleFileChange}
        />
        {selectedFile && (
          <div className={styles.filePreview}>
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Selected File Preview"
              className={styles.previewImage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
