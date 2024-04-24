import { useEffect, useState } from "react";
import Card from "../../components/Card/Card"
import Breadcumbs from "../../components/Breadcumbs/Breadcumbs";
import "./add-goods.css"
const AddGoods = () => {
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
    <div className='add-goods'>
        <Breadcumbs pageName={"تحميل البضاعة"}/>
        <Card>
        <div className="card-block" dir="rtl">
            <h4 className="sub-title">أدخل تفاصيل البضاعة</h4>
            <form className="row">
                <div className="form-group row col-sm-6 col-md-4">
                    <label className="col-sm-12 col-form-label">رقم البوايصة</label>
                    <div className="col-sm-12">
                        <select name="" id="">
                            <option value="">اختر رقم البوليصة</option>
                            <option value="sar">235-53428896</option>
                            <option value="dollar">235-53451196</option>
                            <option value="euro">235-52468896</option>
                            <option value="pound">235-53401096</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row col-sm-6 col-md-4">
                    <label className="col-sm-12 col-form-label">اسم الشركة</label>
                    <div className="col-sm-12">
                        <input type="text" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="form-group row col-sm-6 col-md-4">
                    <label className="col-sm-12 col-form-label">عدد الطرود</label>
                    <div className="col-sm-12">
                        <input type="number" min="0" className="form-control" placeholder="" />
                    </div>
                </div>
                <div className="form-group row col-sm-6 col-md-4">
                    <label className="col-sm-12 col-form-label">اسم السائق المستلم</label>
                    <div className="col-sm-12">
                        <div className="selector-element">
                            <div className="input-div">
                                <label htmlFor="driver-name-1">اسم السائق</label>
                                <input type="radio" name="driver-name" id="driver-name-1" hidden />
                            </div>
                            <div className="input-div">
                                <label htmlFor="driver-name-2">اسم السائق</label>
                                <input type="radio" name="driver-name" id="driver-name-2" hidden />
                            </div>
                            <div className="input-div">
                                <label htmlFor="driver-name-3">اسم السائق</label>
                                <input type="radio" name="driver-name" id="driver-name-3" hidden />
                            </div>
                            <div className="input-div">
                                <label htmlFor="driver-name-another">أخرى</label>
                                <input type="radio" name="driver-name" id="driver-name-another" hidden />
                            </div>
                            <div className="more-drivers">
                                <div className="driver-name">
                                    <label htmlFor="driver-name">اسم السائق</label>
                                    <input type="text" placeholder="اسم السائق" id="driver-name"/>
                                </div>
                                <div className="driver-phone">
                                    <label htmlFor="driver-phone">رقم الجوال</label>
                                    <input type="number" min="0" placeholder="رقم الجوال" id="driver-phone"/>
                                </div>
                            </div>
                        </div>
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

export default AddGoods