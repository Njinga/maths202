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

            <mdb-row>
                <!-- Choose appropriate mdb-col  -->
                <!--Lagrange Multipliers  -->
                <mdb-col class="text-left w-responsive mx-auto m-3">
                    
                    <h5 class="pb-4 font-weight-bold red-text text-center">Lagrange Multipliers</h5>
                    <h6 class="text-left">Procedure for method of Lagrange Multipliers</h6>
                    <ol>
                    <li>
                        <p> Formulate the problem in the form</p>
                        <p>Maximize (or Minimize) </p><span v-katex="'\ z = f{(x,y)}'"></span>
                        <br>
                        <p>Subject to </p><span v-katex="'\ g{(x,y)} = 0'"></span>
                        <br>
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
                        <br>
                        <p>simultaneously for x, y and \ to get the critical point <span v-katex="'\ x_0 , y_0 \\lambda_0'"></span></p>
                        </li>
                        <li>
                        Evaluate the optimal value <span v-katex="'\ f(x_0,y_0)'"></span>


                        </li>
                    </ol>
                        <h6 class="text-left">Utility and Utility Maximisation</h6>
                    
                    <div>
                    <p class="indigo-text">What is Utility</p>
                    <p>
                        Pleasure or satisfaction (value for money) derived by a person from the
                        consumption of a good or service.
                    </p>
                    </div>

                    <div>
                    <p class="indigo-text">What is Utility?</p>
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
                        <div v-katex="'\ f(x,y)=x^{4}y^{2} '"></div>
                        <br>
                        <p>
                            where x is the number of units of commodity A and y is the number of
                            units of commodity B. Suppose further that the consumer has E18 to
                            spend. If a unit of the commodity A costs E3 and a unit of B costs E1,
                            use the method of Lagrange multipliers to maximise the utility.
                        </p>
                    </div>

                        <h6 class="text-left">Utility and Utility Maximisation</h6>

                        <p><span class="red-text">Solution:</span><br> We start by formulating the constraint equation <span v-katex="'\ g(x,y)'"></span>  
                            from the budget equation budget equation.
                        </p>
                        <p>
                            The total cost is <span v-katex="'\ 3x + y '"></span>. Thus, the budget equation is <span v-katex="'\ 3x + y = 18'"></span> .
                            We define the constraint equation as
                        </p>
                        <div v-katex="'\ g(x,y) = 3x + y -18'"></div>
                        <p>
                            We then form the langrangian fuction with the Langrange multiplier <span v-katex="'\\lambda '"></span>
                        </p>

                        <div v-katex="'\ F(x,y, \\lambda) = f(x,y) + \\lambda g(x,y)'"></div>
                        <div v-katex="'\ F(x,y, \\lambda) = x^{4}y^{2} + \\lambda (3x + y -18)'"></div>


                        <h6 class="text-left">Optimising the Lagrangean</h6>
                        <p>
                            To optimize the Lagrangean we obtain critical points by solving the system
                            of equations that result from equating the first order partial derivatives to
                            zero.
                        </p>
                        <p>The partial derivatives are</p>
                        <div v-katex="'\ F_x = 4x^{3}y^{2} + 3\\lambda = 0'"></div>
                        <div v-katex="'\ F_y = 2x^{4}y + \\lambda = 0 '"></div>
                        <div v-katex="'\ F_\\lambda = 3x + y - 18  = 0 '"></div>

                        <p>Thus, we must solve</p>

                        <div v-katex="'\ 4x^{3} + 3\\lambda  = 0 '"></div>
                        <div v-katex="'\ 2x^{4}y + \\lambda  = 0 '"></div>
                        <div v-katex="'\ 3x + y - 18  = 0 '"></div>

                        <h6 class="text-left">Solving for <span v-katex="'\ x , y \\textrm{ and } \\lambda'"></span></h6>
                        <p>Making <span v-katex="'\\lambda'"></span> the subject gives</p>
                        <div v-katex="'\\lambda = -\\frac{4}{3} x^{3}y^{2} \\textrm{ and }  -2x^{4}y '"></div>

                        <p>Equating the two equations gives</p>
                        <div v-katex="'\-\\frac{4}{3} x^{3}y^{2} = -2x^{4}y '"></div>
                        <div v-katex="'\\lambda = -\ 4x^{3}y^{2} = -6x^{4}y '"></div>
                        <div v-katex="'\ 2y = 3x '"></div>

                        <h6 class="text-left">Evaluating the optimal point</h6>
                        <p>Having found the equation <span v-katex="'\ 2y = 3x'"></span> we must solve the pair of equations</p>
                        <div v-katex="'\ 2y = 3x \\textrm{ and }  3x + y = 18'"></div>
                        <p>From the second equation we have, <span v-katex="'\ y = 18-3x'"></span></p>
                        <p>Substituting in <span v-katex="'\ 2y =  3x'"></span> gives</p>

                        <div v-katex="'\ 2(18-3x) = 3x '"></div>
                        <div v-katex="'\ 36 - 6x = 3x = 3x '"></div>
                        <div v-katex="'\ 36 = 9x '"></div>

                        <p>This implies that  <span v-katex="'\ x=4  \\textrm{ and }   y=18-3(4) = 6'"></span></p>
                        <p>Since the solution (4,6) <span v-katex="'\ (4,6)'"></span> is the only critical point, we conclude that the
                            maximum utility is</p>

                        <div v-katex="'\ f(4,6) = (4)^{4}(6)^{2} = 9216'"></div>
                            

                </mdb-col> 
        <!--Lagrange Multipliers  -->


                <mdb-col>
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
    import { mdbContainer, mdbRow, mdbCol, mdbIcon } from "mdbvue";
    import 'katex/dist/katex.min.css';
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