import { useEffect, useState } from "react";
import Card from "../../components/Card/Card"
import Breadcumbs from "../../components/Breadcumbs/Breadcumbs";
import pic from "../../assets/imgs/male-user.jpg"
import "./add-goods.css"
const AddGoods = () => {
    let redirectFunction = (e) => {
        e.preventDefault();
        window.location.replace('/invoice-list');
    }
    let [areFiles, setAreFiles] = useState(false)
    let [files, setFiles] = useState([])
    let goodsImgs
    useEffect(() => {
        let imgView = document.getElementById("img-view");
        let uploadBillInput = document.getElementById("upload-bill");
        let dragArea = document.getElementById("drag-area");
    
        let viewImg = () => {
            if(uploadBillInput.files[0] && uploadBillInput.files[0].type !== "application/pdf"){
                // files = uploadBillInput.files;
                setFiles(uploadBillInput.files)
                console.log(files)
                
                // Object.keys(files).map((key) => {
                //     console.log(files[key])
                // })
                setAreFiles(true)
                let imgLink = URL.createObjectURL(uploadBillInput.files[0]);
                // imgView.style.backgroundImage = `url(${imgLink})`;
                // imgView.textContent = ""
            }else if(uploadBillInput.files[0] && uploadBillInput.files[0].type === "application/pdf"){
                setAreFiles(true)
                // files = uploadBillInput.files;
                setFiles(uploadBillInput.files)
                console.log(files)
                
                // Object.keys(files).map((key) => {
                //     console.log(files[key])
                // })
                imgView.style.backgroundImage = "";
                imgView.textContent = uploadBillInput.file
            }else if(uploadBillInput.files.length === 0 ){
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
    },[files])
    return (
    <div className='add-goods'>
        <Breadcumbs pageName={"تحميل البضاعة"}/>
        <Card>
        <div className="card-block" dir="rtl">
            <h4 className="sub-title">أدخل تفاصيل البضاعة</h4>
            <form className="row">
                <div className="form-group row col-sm-6 col-md-4">
                    <label className="col-sm-12 col-form-label">رقم البوليصة</label>
                    <div className="bill-number">
                        235-53428896
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
                    {
                        !areFiles && 
                        <label className="col-sm-12 col-form-label" htmlFor="upload-bill">أضف المرفقات</label>
                    }
                    <div className="col-sm-12">
                        {
                            // !areFiles && 
                            <label id="img-view" className="col-sm-12 col-form-label" htmlFor="upload-bill">
                                <h5>اسحب الملفات هنا</h5>
                                <span>أو</span>
                                <h5>اضغط لرفع المرفقات</h5>
                            </label>    
                        }
                        <input type="file" id="upload-bill" className="form-control" multiple hidden/>
                    </div>
                </div>
                {
                    areFiles && 
                    <div className="goods-imgs">
                        <h4>صور الطرود</h4>
                        <div className="imgs">
                                {
                                    files ? Object.keys(files).map((key) => {
                                        let imgLink = URL.createObjectURL(files[key]);
                                        return(
                                            <div className="img">
                                                    <div className="img-wrapper">
                                                        {
                                                        files[key].type !== "image/jpeg" && files[key].type !== "image/png" ? 
                                                        <h3>{files[key].type}</h3>
                                                        :
                                                        <img src={imgLink} alt="" />
                                                        }
                                                        </div>
                                                <h4>
                                                    {files[key].name}
                                                </h4>
                                            </div>      
                                        )
                                    })
                                    : "there are NOOOOOOO files"
                                }
                        </div>
                    </div>
                }
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