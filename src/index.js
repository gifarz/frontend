import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { CompanySetting } from './Components/Pages/Contents/CompanySetting/CompanySetting';
import { CashBank } from './Components/Pages/Contents/CashBank/CashBank';
import { TransferBank } from './Components/Pages/Contents/CashBank/TransferBank';
import { ReceiveMoney } from './Components/Pages/Contents/CashBank/ReceiveMoney';
import { PayMoney } from './Components/Pages/Contents/CashBank/PayMoney';
import { Sales } from './Components/Pages/Contents/Sales/Sales';
import { SalesOrder } from './Components/Pages/Contents/Sales/SalesOrder';
import { SalesDelivery } from './Components/Pages/Contents/Sales/SalesDelivery';
import { SalesQuote } from './Components/Pages/Contents/Sales/SalesQuote';
import { SalesReturn } from './Components/Pages/Contents/Sales/SalesReturn';
import { PriceAdjusment } from './Components/Pages/Contents/Sales/PriceAdjusment';
import { Discount } from './Components/Pages/Contents/Sales/Discount';
import { ComissioSales } from './Components/Pages/Contents/Sales/ComissionSales';
import { Purchase } from './Components/Pages/Contents/Purchase/Purchase';
import { PurchaseInvoice } from './Components/Pages/Contents/Purchase/PurchaseInvoice';
import { PurchaseDelivery } from './Components/Pages/Contents/Purchase/PurchaseDelivery';
import { PurchaseQuote } from './Components/Pages/Contents/Purchase/PurchaseQuote';
import { PurchaseReturn } from './Components/Pages/Contents/Purchase/PurchaseReturn';
import { PurchaseOrder } from './Components/Pages/Contents/Purchase/PurchaseOrder';
import { SupplierPrice } from './Components/Pages/Contents/Purchase/SupplierPrice';
import { Expense } from './Components/Pages/Contents/Expense/Expense';
import { Inventory } from './Components/Pages/Contents/InventoryProducts/InventoryProduct';
import { AssetManagement } from './Components/Pages/Contents/AssetManagement/AssetManagement';
import { Tax } from './Components/Pages/Contents/Tax/Tax';
import { Reports } from './Components/Pages/Contents/Reports/Reports';
import { ContactList } from './Components/Pages/Contents/ContactList/ContactList';
import { Setting } from './Components/Pages/Contents/Setting/Setting';
import { SignIn } from './Components/Pages/Auth/SignIn';
import { SignUp } from './Components/Pages/Auth/SignUp';
import { PrepaidPurchase } from './Components/Pages/Contents/Purchase/PrepaidPurchase';
// import CreateExpense from "./Contents/Expense/CreateExpense";
// import NewAccount from "./Contents/GeneralLedger/NewAccount";
// import GeneralJournal from "./Contents/GeneralLedger/GeneralJournal";
// import SalariesExpense from "./Contents/GeneralLedger/SalariesExpense";
// import ClosingBook from "./Contents/GeneralLedger/ClosingBook";
// import StartClosingBook from "./Contents/GeneralLedger/StartClosingBook";
// import Budgeting from "./Contents/GeneralLedger/Budgeting";
// import GoodsService from "./Contents/InventoryProduct/GoodsService";
// import ProductRequisition from "./Contents/InventoryProduct/ProductRecuisition";
import Header from "./Components/Navs/Header";
import Sidebar from "./Components/Navs/Sidebar";
import Footer from "./Components/Navs/Footer";

const routing = (
  <Router>
    <Header />
    <Sidebar />
    <div className="page-wrapper">
      <div className="container-fluid">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/companysetting" component={CompanySetting} />
          <Route path="/cashbank" component={CashBank} />
          <Route path="/sales" component={Sales} />
          <Route path="/purchase" component={Purchase} />
          <Route path="/expense" component={Expense} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/asset" component={AssetManagement} />
          <Route path="/tax" component={Tax} />
          <Route path="/reports" component={Reports} />
          <Route path="/contactlist" component={ContactList} />
          <Route path="/setting" component={Setting} /> 
          <Route path="/transferbank" component={TransferBank} />
          <Route path="/receivemoney" component={ReceiveMoney} />
          <Route path="/paymoney" component={PayMoney} />
          <Route path="/salesorder" component={SalesOrder} />
          <Route path="/salesdelivery" component={SalesDelivery} />
          <Route path="/salesquote" component={SalesQuote} />
          <Route path="/salesreturn" component={SalesReturn} />
          <Route path="/priceadjusment" component={PriceAdjusment} />
          <Route path="/discount" component={Discount} />
          <Route path="/comissionsales" component={ComissioSales} />
          <Route path="/purchaseinvoice" component={PurchaseInvoice} />
          <Route path="/purchaseorder" component={PurchaseOrder} />
          <Route path="/purchasedelivery" component={PurchaseDelivery} />
          <Route path="/purchasequote" component={PurchaseQuote} />
          <Route path="/purchasereturn" component={PurchaseReturn} />
          <Route path="/supplierprice" component={SupplierPrice} />
          <Route path="/prepaidpurchase" component={PrepaidPurchase} />
          {/* <Route exact path="/" component={App} />
          <Route path="/createexpense" component={CreateExpense} />
          <Route path="/newaccount" component={NewAccount} />
          <Route path="/generaljournal" component={GeneralJournal} />
          <Route path="/salariesexpense" component={SalariesExpense} />
          <Route path="/closingbook" component={ClosingBook} />
          <Route path="/startclosingbook" component={StartClosingBook} />
          <Route path="/budgeting" component={Budgeting} />
          <Route path="/goodsservice" component={GoodsService} />
          <Route path="/productrequisition" component={ProductRequisition} /> */}
        </Switch>
      </div>
    </div>
    <Footer />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
