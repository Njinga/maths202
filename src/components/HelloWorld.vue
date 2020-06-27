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
                    <p>
                        <ul>
                            <li>
                                <strong><em>Identify</em></strong> and <strong><em>sketch</em></strong> the domain and range of
                                functions of two variables.
                            </li>
                            <li><strong><em>Derive</em></strong> revenue and profit functions from given cost data and demand schedule.</li>
                            <li>
                                <strong><em>Define</em></strong> and <strong><em>compute</em></strong> the first and second order partial derivatives of functions
                                of two or more variables.
                            </li>
                            <li>
                                <strong><em>Use</em></strong> partial derivatives to <strong><em>calculate</em></strong>
                                marginal quantities, such as cost, profit,
                                revenue, productivity and utility, and interpret the results.
                            </li>
                            <li>
                                <strong><em>Use</em></strong> partial derivatives to <strong><em>determine</em></strong>
                                whether products are complementary or substitutes.
                            </li>
                            <li>
                                <strong><em>Construct</em></strong> and <strong><em>solve</em></strong> unconstrained optimization problems, defined as functions of two
                                variables, using the second partial derivative test.
                            </li>
                            <li>
                                <strong><em>Formulate</em></strong> and <strong><em>solve</em></strong> constrained optimization problems using the substitution method
                                and the method of Lagrange Multipliers.
                            </li>
                            <li>
                                <strong><em>Use</em></strong> partial derivatives to <strong><em>solve</em></strong> a class of optimization problems with applications in
                                business and economics. Examples to include
                            
                            <ul>
                                <li>	Minimising costs subject to production quotas.</li>
                                <li>	Maximising utility subject to budgetary constraints</li>
                                <li> Maximising production subject to a cost constraint. </li>
                            </ul>
                                </li>
                        </ul>
                    </p>
                </mdb-col>

                <mdb-col class="text-left w-responsive mx-auto m-3">

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
                    <strong>Application of partial derivatives</strong>
                </mdb-col>
            </mdb-row>
        </section>
        <hr />
        <section class="text-center dark-grey-text mb-4">
            <h4 class="font-weight-bold pb-4 text-center">
                Unconstrained Optimization
            </h4>
            <mdb-row>
                <!-- Choose appropriate mdb-col  -->
                <mdb-col>
                </mdb-col>
            </mdb-row>
        </section>
        <hr />
        <section class="text-center dark-grey-text mb-4">
            <h4 class="font-weight-bold pb-4 text-center">
                Constrained Optimization
            </h4>
            <mdb-row class="text-left">
                <!-- Choose appropriate mdb-col  -->             

        

        <!--Procedure for method of Lagrange Multipliers  -->
                <mdb-col >
                    <h6 class="text-left">Procedure for method of Lagrange Multipliers</h6>
                    <ol>
                        <li>
                            <p> Formulate the problem in the form</p>
                            <p>Maximize (or Minimize) </p><span v-katex="'\ z = f{(x,y)}'"></span>
                            <p>Subject to </p><span v-katex="'\ g{(x,y)} = 0'"></span>
                        </li>
                        <li>
                            Introduce the Lagrange multiplier <span v-katex="'\\lambda'"></span>, and construct the Lagrangean
                            function
                                            <div v-katex:display="'\ F{(x,y)} = f(x,y) +  = \\lambda g{(x,y)}  '"></div>
                            </li>
                            <li>
                                <p>Optimize the Lagrangean by solving</p>
                            <div v-katex:display="'\ F_x = f_x + \\lambda g_x = 0'"></div>
                            <div v-katex:display="'\ F_y = f_y + \\lambda , g_y = 0'"></div>
                            <div v-katex:display="'\ F_\\lambda = g(x,y) = 0'"></div>
                            <div>Fx = fx +\gx=0</div>
                            <div>Fy = fx +\,gy=0</div>
                            <div>F\ = g(x,y)=0</div>
                            <p>simultaneously for x, y and \ to get the critical point <span v-katex="'\ x_0 , y_0 \\lambda_0'"></span></p>
                            </li>
                            <li>
                            Evaluate the optimal value <span v-katex="'\ f(x_0,y_0)'"></span>


                            </li>
                    </ol>

                    <div>
                         <p class="indigo-text">What is Cobb-Douglas equation?</p>
                         <p>
                            In economics, the Cobb{Douglas function is a production function, used to
                            represent relationship between the amounts of two or more inputs
                            (particularly physical <strong>capital</strong> and <strong>labour</strong>) and the amount of output that
                            can be produced by those inputs.
                         </p>
                    </div>

                    <p>In its most standard form for production of a single good with two factors,
                        the function is</p>
                        <div v-katex="'\\ f(x,y) = Ax^{\\beta}y^{\\alpha}'"></div>
                        <ul>
                            <li><span v-katex="'\\ f(x,y)'"></span> is the total production</li>
                            <li><span v-katex="'\\ x'"></span> is the quantity of labour.</li>
                            <li><span v-katex="'\\ y'"></span> is the quantity of capital.</li>
                            <li><span v-katex="'\\ A'"></span> is the quantity of capital.</li>
                            <li><span v-katex="'\\beta textrm{ and } \\alpha '"></span> are constants between 0 and 1.</li>
                        </ul>

                    <div>
                        <p class="green-text text-left">Example (1)</p>
                        <p>Suppose <span v-katex="'\\ x'"></span> units of labour and <span v-katex="'\\ y'"></span> units of capital are required to produce</p>
                        <div v-katex="'\ f(x,y) = 900x^{\\frac{1}{7}}y^{\\frac{6}{7}} '"></div>
                        <p>
                            units of a certain product. Each unit of labour costs E2 and each unit of
                            capital costs E6. If E2716 has been budgeted for the production of this
                            product, how should this amount be allocated between labour and capital
                            in order to maximize production? What is the maximum number of units
                            that can be produced?
                        </p>
                    </div>

                     <h6 class="text-left red-text">Formulating constraint and Lagrangean</h6>
                     <p><span class="red-text">Solution:</span> We start by formulating the constraint equation <span v-katex="'\ g(x,y)'"></span></p>
                    <p> The total cost of using x units of labour and <span v-katex="'\\ y'"></span> units of capital is <span v-katex="'\\ 2x + 6y'"></span>
                        Thus, the budget equation is <span v-katex="'\\ 2x +6y = 2716'"></span>. We define the constraint
                        equation as</p>
                        <div v-katex="'\ g(x,y) = 2x + 6y - 2716 '"></div>
                    

                    <p>We then form the Lagrangian function with the Lagrange multiplier <span v-katex="'\\lambda'"></span></p>
                        <div v-katex="'\ F(x,y, \\lambda) = f(x,y) + \\lambda g(x,y) '"></div>
                        <div v-katex="'\ F(x,y, \\lambda) = 900x^{\\frac{1}{7}}y^{{6}{7}} + \\lambda(2x + 6y -2716) '"></div>
                    
                    
                     <h6 class="text-left red-text">Optimising the Lagrangean</h6>
                    <p> To optimize the Lagrangean we obtain critical points by solving the system
                        of equations that result from equating the first order partial derivatives to
                        zero.</p>  
                    <p>The partial derivatives are</p>  
                       
                         <div v-katex="'\ F_x = 900( \\frac{1}{7} ) x^{-\\frac{6}{7}} y^{\\frac{6}{7}} + 2\\lambda =0  '"></div>
                         <div v-katex="'\ F_y = 900( \\frac{6}{7} ) x^{-\\frac{1}{7}} y^{-\\frac{1}{7}} + 6\\lambda = \\frac{5400x^{\\frac{1}{7}}}{7y^{\\frac{1}{7}}}  + 6\\lambda = 0   '"></div>
                         <div v-katex="'\ F_\\lambda = 2x + 6y - 2716 = 0  '"></div>

                     <h6 class="text-left red-text">Solving for <span v-katex="'\ x, y \\textrm{ and } \\lambda'"></span></h6>
                        
                         <div v-katex="'\ \\frac{900y^{\\frac{6}{7}}}{7x^{\\frac{6}{7}}} + 2\\lambda = 0'"></div>
                    <p>We must solve</p>
                         <div v-katex="'\ \\frac{5400x^{\\frac{1}{7}}}{7y^{\\frac{1}{7}}} + 6\\lambda = 0'"></div>
                         <p>Making <span v-katex="'\\lambda'"></span> the subject in (1) and (2) gives</p>
                         <div v-katex="'\\lambda = \\frac{450y^{\\frac{6}{7}}}{7x^{\\frac{6}{7}}} \\textrm{ and }  \\lambda = \\frac{900y^{\\frac{1}{7}}}{7y^{\\frac{1}{7}}} '"></div>
                        
                        <p>
                            Equating the two equations <span v-katex="'-\\frac{450y^{\\frac{6}{7}}}{7x^{\\frac{6}{7}}} = -\\frac{900y^{\\frac{1}{7}}}{7y^{\\frac{1}{7}}} '"></span>
                        </p>

                          <div v-katex="'-\\frac{450}{7} y^{\\frac{6}{7} + \\frac{1}{7}  } = -\\frac{900}{7} x^{\\frac{1}{7} + \\frac{6}{7}} \\Rightarrow \\boxed{y=2x} '"></div>


                     <h6 class="text-left red-text">Evaluating optimal point</h6>
                     <p>Having found the equation y = 2x we must solve the pair of equations</p>
                     <div v-katex="'\ y=2x \\textrm{ and } 2x +6y = 2716 '"></div>
                     <p>Substituting <span v-katex="'\ y=2x'"></span> in the second equation gives <span v-katex="'\ 2x + 6(2x) = 2716'"></span> or
                        <span v-katex="'\ 14x = 2716'"></span> which gives <span v-katex="'\ x=195'"></span>x = 194. Thus y = 2(194) = 388</p>

                    <p>Since the solution (194,388) is the only critical point, we conclude that
                       the maximum productivity occurs when 194 units of labour and 388 units
                       of capital are used. </p>

                       <p>Thus, the maximum number of units that can be produced is</p>
                       <div v-katex="'\ f(194,388) = 900(194)^{\\frac{1}{7}} (388)^{\\frac{6}{7}} = 316279'"></div>
                       
                    </mdb-col >
        <!--Procedure for method of Lagrange Multipliers  -->        


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
    import { mdbContainer, mdbRow, mdbCol, mdbIcon } from "mdbvue";
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