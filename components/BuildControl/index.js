import React, {Component} from "react";
import Foods from "../Foods";
import Orders from "../Orders";
import Test from "../test";
import Modal from "../modal";
import "./style.css";

class BuildControl extends Component {

    state = {
        order:{
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,

        },
        foods: [
            {
                id : 1,
                foodName: 'Dumplings with tea',
                price: '4',
                ImgUrl:'https://mamalovestocook.com/wp-content/uploads/2020/05/boiled-dumplings-480x480.jpg'
            },
            {
                id : 2,
                foodName: 'Chicken Bucket with french fries',
                price: '6',
                ImgUrl: 'https://img.freepik.com/premium-photo/top-view-fried-chicken-bucket-with-burger-fries_23-2148699026.jpg?w=2000'
            },
            {
                id : 3,
                foodName: 'Italian Pasta',
                price: '15',
                ImgUrl: 'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2021/07/Bucatini-all-Amatriciana-SQ.jpg'
            },
            {
                id : 4,
                foodName: 'Hawaii Pizza',
                price: '30',
                ImgUrl: 'https://www.drozshow.com/media-library/image.jpg?id=24952787&width=980&quality=85'
            },
            {
                id : 5,
                foodName: 'Porkchop with rice',
                price: '9',
                ImgUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/3/31/4/FNM_050116-Vietnamese-Pork-Chops-with-Ginger-Rice-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1459549452893.jpeg'
            },
            {
                id : 6,
                foodName: 'Traditional Ramen',
                price: '7',
                ImgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg/1200px-Shoyu_ramen%2C_at_Kasukabe_Station_%282014.05.05%29_1.jpg'
            },
            {
                id : 7,
                foodName: 'Salad & Beef',
                price: '6',
                ImgUrl: 'https://www.spoonforkbacon.com/wp-content/uploads/2020/07/steak-salad-recipe-card.jpg'
            },
            {
                id : 8,
                foodName: 'T-Bone Steak',
                price: '8',
                ImgUrl: 'https://tipbuzz.com/wp-content/uploads/T-bone-500x500.jpg'
            },
            {
                id : 9,
                foodName: 'Potato tarts, french fries with beef',
                price: '10',
                ImgUrl: 'https://images.food52.com/gEqsVblId05Z85WCJu-b8YbiHGc=/1200x675/792aa81c-2748-43a8-8f02-048faf4e7945--2020-1124_steak-frites_3x2_rocky-luten_032.jpg'
            },
        ],
        TotalPrice: 0,
        modal: false
    };
    AddFood=(id, TotalUne)=>{
        const AddFood = {...this.state.order};
        AddFood[id]++;
        let newPrice = this.state.TotalPrice + Number(TotalUne);
        this.setState({order: AddFood, TotalPrice : newPrice});
    };
    RemoveFood=(id, TotalUne)=>{
        if(this.state.order[id] > 0 ){
            const RemoveFood = {...this.state.order};
            RemoveFood[id]--;
            this.setState({order :RemoveFood});
            let TotalPrice = this.state.TotalPrice - Number(TotalUne);
            this.setState({order: RemoveFood, TotalPrice : TotalPrice});
        }
    };
    FoodNemeh=(id, TotalUne)=>{
        if(this.state.order[id] === 0 ){
            const RemoveFood = {...this.state.order};
            RemoveFood[id]++;
           
            let TotalPrice = this.state.TotalPrice + Number(TotalUne);
            this.setState({order: RemoveFood, TotalPrice : TotalPrice});
        }
    };
    showModal = () =>{
        this.setState({modal : true})
        console.log("ajillaaa")


    }
render(){
    console.log(this.state.order[1]);
    return(
        <div className="BuildControlSection"> 
            <Foods foods={this.state.foods} FoodNemeh={this.FoodNemeh}/>
            <Orders AddFood={this.AddFood} RemoveFood={this.RemoveFood} order={this.state.order} foods={this.state.foods} TotalPrice={this.state.TotalPrice} show={this.showModal}
            />
            <Modal show={this.state.modal}>
            <Test foods={this.state.foods} order={this.state.order}/>
            </Modal>

        </div>
    );
};
};

export default BuildControl;

