// {{> dashboard}}
// <head>
//   <style>
//     h6 {
//     font-size: 14px;
// }

// .card .card-block p {
//     line-height: 25px;
// }
// .gradient-custom {
//     /* fallback for old browsers */
//     background: #6a11cb;
    
//     /* Chrome 10-25, Safari 5.1-6 */
//     background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
    
//     /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
//     background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
//     }

//   </style>
// </head>

// <section>
//   <div>
    
//   <div class="container py-5">
     
//     <div class="row d-flex justify-content-center my-4">
    
//       <div class="col-md-8">
//          {{#each cd}}
//         <div class="card mb-4">
         
//           <div class="card-header py-3">
             
//             <h5 class="mb-0">Cart - 2 items</h5>
//           </div>
//           <div class="card-body">
//             <!-- Single item -->
//             <div class="row">
//               <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
//                 <!-- Image -->
//                 <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
//                   <img src={{this.img}}
//                     class="w-100" alt="Blue Jeans Jacket" />
//                   <a href="#!">
//                     <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
//                   </a>
//                 </div>
//                 <!-- Image -->
//               </div>

//               <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
//                 <!-- Data -->
//                 <p><strong>{{this.name}}</strong></p>
//                 <p>{{this.des}}</p>
               
//                 <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
//                   title="Remove item">
//                   <i class="fas fa-trash"></i>
//                 </button>
//                 <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
//                   title="Move to the wish list">
//                   <i class="fas fa-heart"></i>
//                 </button>
//                 <!-- Data -->
//               </div>

//               <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
//                 <!-- Quantity -->
//                 <div class="d-flex mb-4" style="max-width: 300px">
//                   <button class="btn btn-primary px-3 me-2"
//                     onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
//                     <i class="fa fa-minus" aria-hidden="true"></i>
//                   </button>

//                   <div class="form-outline">
//                     <input id="form1" min="0" name="quantity" value={{this.quantity}} type="number" class="form-control" />
//                     <label class="form-label" for="form1">Quantity</label>
//                   </div>

//                   <button class="btn btn-primary px-3 ms-2"
//                     onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
//                     <i class="fas fa-plus"></i>
//                   </button>
//                 </div>
//                 <!-- Quantity -->

//                 <!-- Price -->
//                 <p class="text-start text-md-center">
//                   <strong>${{this.price}}</strong>
//                 </p>
//                 <!-- Price -->
//               </div>
//             </div>
//             <!-- Single item -->

//             <hr class="my-4" />
   
//           </div>
         
//         </div>
//          {{/each}}
       
//       </div>
//       <div class="col-md-4">
//         <div class="card mb-4">
//           <div class="card-header py-3">
//             <h5 class="mb-0">Summary</h5>
//           </div>
//           <div class="card-body">
//             <ul class="list-group list-group-flush">
//               <li
//                 class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
//                 <div>
//                   <strong>Total amount</strong>
//                   <strong>
//                     <p class="mb-0"></p>
//                   </strong>
//                 </div>
//                 <span><strong>${{tp}}</strong></span>
//                 </li>
//             </ul>
//             </div>
//            <button type="button" class="btn btn-primary btn-lg btn-block">
//               Go to checkout
//             </button>
           
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>