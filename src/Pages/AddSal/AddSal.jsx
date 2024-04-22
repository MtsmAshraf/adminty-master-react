import { useEffect } from "react";
import Card from "../../components/Card/Card"
import Breadcumbs from "../../components/Breadcumbs/Breadcumbs";
const AddSal = () => {
    let redirectFunction = (e) => {
        e.preventDefault();
        window.location.replace('/invoice-list');
    }
    useEffect(() => {
        console.log("mounted")
        let imgView = document.getElementById("img-view");
        let uploadBillInput = document.getElementById("upload-bill");
        let dragArea = document.getElementById("drag-area");
    
        let viewImg = () => {
            console.log(uploadBillInput.files[0])
            if(uploadBillInput.files[0] && uploadBillInput.files[0].type !== "application/pdf"){
                let imgLink = URL.createObjectURL(uploadBillInput.files[0]);
                imgView.style.backgroundImage = `url(${imgLink})`;
                imgView.textContent = ""
            }else if(uploadBillInput.files[0] && uploadBillInput.files[0].type === "application/pdf"){
                console.log(uploadBillInput.files[0])
                imgView.style.backgroundImage = "";
                imgView.textContent = uploadBillInput.files[0].name
            }else if(uploadBillInput.files.length === 0 ){
                console.log("aiosdjoaidh") 
                imgView.style.backgroundImage = "";
                imgView.innerHTML = `
                    <h5 style="color: #666;">اسحب الملفات هنا</h5>
                    <span style="color: #999;">أو</span>
                    <h5 style="color: #666;">اضغط لرفع المرفقات</h5>
                `
            }
        }
        uploadBillInput.addEventListener("change", viewImg)
        dragArea.addEventListener("dragover",(e) => {
            e.preventDefault();
        })
        dragArea.addEventListener("drop",(e) => {
            e.preventDefault();
            uploadBillInput.files = e.dataTransfer.files;
            viewImg();
        })
    })
    return (
    <div className='add-custom'>
        <Breadcumbs pageName={"إضافة سداد سال"}/>
        <Card>
        <div className="card-block" dir="rtl">
            <h4 className="sub-title">أدخل تفاصيل سداد سال</h4>
            <form className="row">
                <div className="form-group row col-sm-6 col-md-4">
                    <label className="col-sm-12 col-form-label">رقم سداد سال</label>
                    <div className="col-sm-12">
                        <input type="number" min="0" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="form-group row col-sm-6 col-md-4">
                    <label className="col-sm-12 col-form-label">التاريخ</label>
                    <div className="col-sm-12">
                        <input type="date" min="0" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="form-group row col-sm-6 col-md-4">
                    <label className="col-sm-12 col-form-label">المبلغ (SAR)</label>
                    <div className="col-sm-12">
                        <input type="number" min="0" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="form-group row col-sm-6 col-md-4">
                    <label className="col-sm-12 col-form-label">عدد الطرود</label>
                    <div className="col-sm-12">
                        <input type="number" min="0" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="form-group row col-sm-6 col-md-4">
                    <label className="col-sm-12 col-form-label">حالة السداد</label>
                    <div className="col-sm-12">
                        <div className="selector-element">
                            <div className="input-div">
                                <label htmlFor="payment-status-1">مدفوع</label>
                                <input type="radio" name="payment-status" id="payment-status-1" hidden />
                            </div>
                            <div className="input-div">
                                <label htmlFor="payment-status-2">مدفوع جزئي</label>
                                <input type="radio" name="payment-status" id="payment-status-2" hidden />
                            </div>
                            <div className="input-div">
                                <label htmlFor="payment-status-3">غير مدفوع</label>
                                <input type="radio" name="payment-status" id="payment-status-3" hidden />
                            </div>
                        </div>
                        {/* <input type="text" className="form-control" placeholder="" /> */}
                    </div>
                </div>
                <div className="form-group row text-center" id="drag-area">
                    <label className="col-sm-12 col-form-label" htmlFor="upload-bill">أضف المرفقات</label>
                    <div className="col-sm-12">
                        <label id="img-view" className="col-sm-12 col-form-label" htmlFor="upload-bill">
                            <h5>اسحب الملفات هنا</h5>
                            <span>أو</span>
                            <h5>اضغط لرفع المرفقات</h5>
                        </label>
                        <input type="file" id="upload-bill" className="form-control" hidden/>
                    </div>
                </div>
                <div className="btn-pair">
                        <input type="submit" value="حفظ"  onClick={(e) => {redirectFunction(e)}}/>
                        <input type="reset" value="إلغاء" />
                </div>
            </form>
        </div>
        </Card>
    </div>
  )
}

export default AddSal