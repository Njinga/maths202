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
                    <h5 class="h5 red-text">Optimisation of functions of two variables</h5>
                    <h6 class="h6">Examples on maximising profit</h6>
                    <div class="example z-depth-2 bg2 p-3 m-4 text-left">
                       <h6 class=" class h6">Theorem</h6>
                       <em>
                       <p>
                           Suppose that <span v-katex="'f(x,y)'"></span> and its first and second partial derivatives are continuous in the domain of <span v-katex="'f'"></span> and that, at critical points <span v-katex="'(x,y) = (a,b)'"></span> we have:
                        </p> 
                        <div v-katex:display="'f_x = f_y = 0'"></div> 
                        <p>
                            Let <span v-katex="'D = f_{xx}f_{yy} - f^{2}_{xy}'"></span> at <span v-katex="'(a,b)'"></span> then: 
                        </p>
                        <ul>
                            <li>
                                if <span v-katex="'D>0'"></span> and <span v-katex="'f{xx}<0'"></span> at <span v-katex="'(a,b)'"></span>,<span v-katex="'f'"></span> has a local maximum at <span v-katex="'(a,b)'"></span>.
                            </li>
                            <li>
                                if <span v-katex="'D>0'"></span> and <span v-katex="'f_{xx}>0'"></span> at <span v-katex="'(a,b)'"></span>, <span v-katex="'f'"></span> has a local minimum at <span v-katex="'(a,b)'"></span>.
                            </li>
                            <li>
                                if <span v-katex="'D<0'"></span> at <span v-katex="'(a,b)'"></span>, <span v-katex="'f'"></span> has a saddle point at <span v-katex="'(a,b)'"></span>.
                            </li>
                            <li>
                                if <span v-katex="'D=0'"></span>, the test is incnclusive and <span v-katex="'f'"></span> may either have a relative extremum or a saddle point at <span v-katex="'(a,b)'"></span>.
                            </li>
                        </ul>
                        </em>
                    </div>
                    <p>The expression <span v-katex="'D=f_{xx}f_{yy}-f^{2}_{xy}'"></span> is known as the <span class="h6"> discriminant</span> of <span v-katex="'f'"></span>.</p>
                    <h5 class="h5 red-text">Maximising profit given the revenue and cost</h5>
                    <div class="example note z-depth-2 bg2 p-3 m-4 text-left">
                        <h6 class="h6">Example 1</h6>
                        <p>
                            The total weekly revenue that a company realises in producing and selling its products is given by: 
                        </p>
                        <div v-katex:display="'R(x,y)=-3x^2-3xy+623x-y^2+701y'"></div>
                        <p>
                            where <span v-katex="'x'"></span> is the number of units of product A and <span v-katex="'y'"></span> is denotes the number  of product B produced and sold each week. The weekly costs due to production of these products is 
                        </p>
                        <div v-katex:display="'C(x,y)=50x+400y+1200'"></div>
                        <p>
                            Determine the number of units of product A and product B that the company should produce and sell per week to maximise its profit.
                        </p>
                    </div>
                     
                    <div  class="example z-depth-2 bg2 p-3 m-4 text-left">
                        <h5 class="h5 red-text text-center">Deriving the profit function</h5>
                        <br>
                        <p><span class="h6 red-text">Solution:</span> We start by deriving the profit function from the given revenue and costs functions</p>
                        <p>The weekly profit arising for producing and selling the products is given by</p>
                        <div v-katex:display="'P(x,y)=R(x,y)-C(x,y)'"></div>
                        <div v-katex:display="'=(-3x^2-3xy+623x-y^2+701y)-(50x+400y+1200)'"></div>
                        <div v-katex:display="'=(-3x^2-3xy+573x-y^2+301y-1200)'"></div>
                        <p>Thus, the profit function to be maximised is</p>
                        <div v-katex:display="'\\boxed{P(x,y)=-3x^2-3xy+573x-y^2+301y-1200}'"></div>
                        <br>
                        <h5 class="h5 red-text text-center">Optimising the profit function</h5>
                        <p>To find the relative maximum of the profit function we evaluate the derivatives and equate them zero to find critical points.</p>
                        <p>From the profit function</p>
                        <div v-katex:display="'P(x,y)=-3x^2-3xy+573x-y^2+301y-1200'"></div>
                        <p>the partial derivatives with respect to <span v-katex="'x'"></span> and <span v-katex="'y'"></span> are</p>
                        <div v-katex:display="'P_x=-6x-3y+573'"></div>
                        <div v-katex:display="'P_y=-3x-2y'"></div>
                        <p>Thus we solve:</p>
                        <div v-katex:display="'\\begin{aligned}\\boxed{6x+3y=573}\\end{aligned}'"></div>
                        <div v-katex:display="'\\begin{aligned}\\boxed{3x+2y=301}\\end{aligned}'"></div>
                        <br>                    
                        <h5 class="h5 red-text text-center">Solving for x, y</h5>
                        <p>To solve the simultaneous equations </p>
                        <div v-katex:display="'\\tag{1} 6x+3y=573 '"></div>
                        <div v-katex:display="'\\tag{2} 3x+2y=301'"></div>
                        <p>we must first multiply equation (2) by 2 to get:</p>
                        <div v-katex:display="'\\tag{3} 6x+4y=602'"></div>
                        <p>Subtracting (1) form (3) yields</p>
                        <div v-katex:display="'y=29'"></div>
                        <p>Next, substitute <span v-katex="'y=29'"></span> in equation (2) and solve for <span v-katex="'x'"></span>, </p>
                        <div v-katex:display="'3x+2(29)=301'"></div>
                        <div v-katex:display="'3x=301-2(29)'"></div>
                        <div v-katex:display="'3x=243'"></div>
                        <div v-katex:display="'x=81'"></div>
                        <br>
                        <h5 class="h5 red-text text-center">Confirming if critical point gives maximum</h5>
                        <p>We found that the critical point is at</p>
                        <p class="text-center"><span  v-katex="'x=81'"></span> and <span v-katex="'y=29'"></span></p>
                        <p>To confirm if the point <span v-katex="'(81,29)'"></span> gives maximum we use the second derivative test. Given that the partial derivatives with respect to <span v-katex="'x'"></span> and <span v-katex="'y'"></span> are</p>
                        <div v-katex:display="'P_x=-6x-3y+573'"></div>
                        <div v-katex:display="'P_y=-3x-2y+301'"></div>
                        <p>the second derivatives are: </p>
                        <p class="text-center"><span v-katex="'P_{xx}=-6'"></span>, <span v-katex="'P_{yy}=-3'"></span>, <span v-katex="'P_{xy}=-3'"></span></p>
                        <p>Therefore, the discrimininamt is</p>
                        <div v-katex:display="'D=P_{xx}P_{yy}-P^{2}_{xy}= (-6)(-2)-(-3)2=3'"></div>
                        <p>Since,</p>
                        <p class="text-center"><span v-katex="'D>0'"></span> and <span v-katex="'P_{xx}<0'"></span></p>
                        <p>for all <span v-katex="'(x,y)'"></span>, it follows that hte point <span v-katex="'(81,29)'"></span> gives a relative maximum of the profit function <span v-katex="'P(x,y)'"></span></p>
                        <p>The maximum profit obtainable from the sale of the products is</p>
                        <div v-katex:display="'P(81,29)= -12000+301(29)-(29)^2-3(29)(81)-3(81)^2'" ></div>
                        <div v-katex:display="'\\boxed{P(81,29)=15571}'"></div>
                    </div>
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
    import katex from 'vue-katex'
    import 'katex/dist/katex.min.css'
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
        methods:{
            update_element(element, value){
                katex.render(value, this.$refs[`${element}`], {
                throwOnError: false
                });
             },
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
