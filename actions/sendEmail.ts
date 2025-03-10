export const sendEmail = async(formData: FormData) => {
          console.log("Running on client");
          console.log(formData.get("SenderEmail"));
          console.log(formData.get("message"));
}