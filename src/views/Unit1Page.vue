<template>
 <mdb-container>
    <!-- -->
   <section class="text-center white-text special-color  py-3 px-3">
              <h4 class="pt-2 pb-2 text-center"> UNIT 1: Multi-variable functions</h4>
    </section>
       <section class="text-center dark-grey-text mb-4 mt-4">
            <h4 class="font-weight-bold pb-4 text-center">
             <mdb-icon icon="marker" size="lg" class="mr-3" />
             Learning outcomes 
             <mdb-icon icon="graduation-cap" size="lg" class="ml-3" />
             </h4>
   <mdb-row class="text-left">
       <!-- Choose appropriate mdb-col  -->
        <mdb-col class="text-left w-responsive mx-auto m-3">
           <p><ul> <li>
                <strong><em>Identify</em></strong> and <strong><em>sketch</em></strong> the domain and range of 
                functions of two variables.</li>
                <li><strong><em>Derive</em></strong> revenue and profit functions from given cost data and demand schedule.</li>
                <li> <strong><em>Define</em></strong> and <strong><em>compute</em></strong> the first and second order partial derivatives of functions
                     of two or more variables.</li> 
                <li><strong><em>Use</em></strong> partial derivatives to <strong><em>calculate</em></strong>
                 marginal quantities, such as cost, profit,
                     revenue, productivity and utility, and interpret the results.</li>  
                 <li><strong><em>Use</em></strong> partial derivatives to <strong><em>determine</em></strong>
                  whether products are complementary or substitutes.</li> 
                <li><strong><em>Construct</em></strong> and <strong><em>solve</em></strong> unconstrained optimization problems, defined as functions of two 
                    variables, using the second partial derivative test. </li> 
                 <li><strong><em>Formulate</em></strong> and <strong><em>solve</em></strong> constrained optimization problems using the substitution method 
                     and the method of Lagrange Multipliers.</li>
                 <li><strong><em>Use</em></strong> partial derivatives to <strong><em>solve</em></strong> a class of optimization problems with applications in 
                 business and economics. Examples to include</li>
               <ul>
                 <li>	Minimising costs subject to production quotas.</li>
                    <li>	Maximising utility subject to budgetary constraints</li>
                    <li> Maximising production subject to a cost constraint. </li>
               </ul>
          </ul>
           </p>
       </mdb-col>    
   </mdb-row>    
     </section>
     <hr />

    <section class="text-center dark-grey-text mb-4 mt-4">
              <h4 class="font-weight-bold pb-4 text-center">Introduction</h4>
   <mdb-row>
       <!-- Choose appropriate mdb-col  -->
       <mdb-col>
       </mdb-col>    
   </mdb-row>    
     </section>
     <hr />
   <section class="text-center dark-grey-text mb-4">
              <h4 class="font-weight-bold pb-4 text-center"> Partial Derivatives</h4>
    <mdb-row>
       <!-- Choose appropriate mdb-col  -->
       <mdb-col>
       </mdb-col>    
   </mdb-row>              
     </section>
     <hr />
   <section class="text-center dark-grey-text mb-4">
              <h4 class="font-weight-bold pb-4 text-center">  Unconstrained Optimization
</h4>
     <mdb-row>
       <!-- Choose appropriate mdb-col  -->
       <mdb-col>
       </mdb-col>    
   </mdb-row>             
     </section>
     <hr />
   <section class="text-center dark-grey-text mb-4">
              <h4 class="font-weight-bold pb-4 text-center">  Constrained Optimization</h4>
    <mdb-row>
       <!-- Choose appropriate mdb-col  -->
       
        <mdb-col class="text-left w-responsive mx-auto m-3">
         <div v-katex:display="'\\frac{a_i}{1+x} + 8'"></div>
         <h5 class="pb-4 text-center">Lagrange Multipliers</h5>
         <h6 class="text-left">Procedure for method of Lagrange Multipliers</h6>
         <ol>
           <li>
             Formulate the problem in the form
             <p>Maximize (or Minimize) </p><span>z=f(x,y)</span>
             <p>Subject to </p><span>g(x,y)=0</span>
           </li>
           <li>
             Introduce the Lagrange multiplier <span></span>, and construct the Lagrangean
              function
              <div> F(x,y,)=f(x,y)+\g(x,y)</div>
            </li>
            <li>
              <div>Fx = fx +\gx=0</div>
              <div>Fy = fx +\,gy=0</div>
              <div>F\ = g(x,y)=0</div>
              <p>simultaneously for x, y and \ to get the critical point (x0; y0\0)</p>
            </li>
            <li>
            </li>
         </ol>
              Evaluate the optimal value f (x0; y0) <li class="mb-2 pl-2"> <span v-katex="'\\textrm{Let } D = f_{xx}f_{yy} - f_{xy}^2 \\textrm{ at } (a,b) \\textrm{, then}'"></span></li> 

            <h6 class="text-left">Procedure for method of Lagrange Multipliers</h6>
         <div>
           <p class="indigo-text">What is Utility</p>
           <p>
             Pleasure or satisfaction (value for money) derived by a person from the
              consumption of a good or service.
           </p>
         </div>

         <div>
           <p class="indigo-text">What is Utility</p>
           <p>
              Economics concept that, when making a purchase decision, a consumer
              attempts to get the greatest value possible from expenditure of least
              amount of money. His or her objective is to maximize the total value
              derived from the available money.
           </p>
           <p>Read more: <a href="http://www.businessdictionary.com">http://www.businessdictionary.com</a></p>

         </div>

         <div>
           <p class="green-text text-left">Example (1)</p>
           <p>Suppose that a consumer has the utility function</p>
            <div>f(x,y)=x^4y</div>
         </div>
       </mdb-col>    
         
   </mdb-row>              
     </section>
     <hr />
   <section class="text-center dark-grey-text mb-4">
              <h4 class="font-weight-bold pb-4 text-center">Summary</h4>
     <mdb-row>
       <!-- Choose appropriate mdb-col  -->
       <mdb-col>
       </mdb-col>    
   </mdb-row>             
     </section>
   </mdb-container>
</template>
<script>
 import 'katex/dist/katex.min.css';
 

  import {mdbContainer, mdbRow, mdbCol,mdbIcon} from "mdbvue";
   export default {
    name: "Unit1",
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon
     },
     data() {
      return {
          };
    },
   }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>