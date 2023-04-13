import Axios from "axios";
import AxiosCall from ".";
import Message from "../../views/components/message/Message";


const UploadUtility = async (file: string | Blob) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
      const res: any = await AxiosCall({
          method: "POST",
          path: "/file/upload",
          contentType: "multipart/form-data",
          data: formData
      });

      console.log("response:",res);
      if (res.status == 1) {
          Message.success("File uploaded successfuly");
          return res
      } else {
          Message.error(res.message)
      }
  } catch (err: any) {
      Message.error(err?.response.data.message)
  }
};

export default UploadUtility;