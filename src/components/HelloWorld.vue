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
                    <!--Classifying Critical Points-->
                    <div>
                        <!--Headings-->
                        <strong class="text-danger">Classifying extreme points</strong>
                        <h5 class="font-weight-bold pb-2 pt-2">MS202 </h5>
                        <p class="font-weight-bold pb-3">Examples on functions of two variables <span v-katex="'f(x,y)'"></span></p>
                        <h6 class="font-weight-bold pb-1 headingUnd">SECOND DERIVATIVE TEST FOR LOCAL EXTREMA </h6> 
                        <!--/Headings-->

                        <!--Theorem--> 
                        <blockquote class="blockquote">
                            <div class="z-depth-1 p-2 pl-4"> 
                                <p class="text-left"> 
                                    <span class="text-primary" v-katex="'\\textrm{Theorem}\\newline'"></span> 
                                    Suppose that <span v-katex="' f(x,y) '"></span> and its first and second partial derivatives are continuous in the domain of<span v-katex="' f '"></span>that, at the critical points <span v-katex='" (x,y) = (a,b) "'></span>we have 
                                    <span v-katex:display="'f_x = f_y = 0'"></span>.

                                    Let  <span v-katex="' D = f_{xx}f_{yy} - f_{xy}^2 '"></span>  at <span v-katex = "' (a,b) '"></span> , then  
                                    <ol type="1">
                                        <li class="mb-2 pl-2"> If <span v-katex="' D > 0 '"></span> and <span v-katex="' f_{xx} < 0 '"></span> at <span v-katex="' (a,b) '"></span>, <span v-katex="' f '"></span> has a local maximum at <span v-katex="' (a,b)'"></span>.</li>
                                        <li class="mb-2 pl-2"> If <span v-katex="' D > 0 '"></span> and <span v-katex="' f_{xx} > 0 '"></span> at <span v-katex="' (a,b) '"></span>,<span v-katex="' f '"></span> has a local minimum at<span v-katex="' (a,b)'"></span>. </li>
                                        <li class="mb-2 pl-2"> If <span v-katex="' D < 0 '"></span> at <span v-katex="' (a,b)'"></span>, <span v-katex="' f '"></span> has a saddle point at <span v-katex="' (a,b)'"></span>.</li>   
                                        <li class="mb-2 pl-2"> If <span v-katex="' D=0'"></span>, the test is inconclusive and <span v-katex="' f '"></span>  may either have a relative extremum or a saddle point at<span v-katex="' (a,b)'"></span>. </li>
                                    </ol> 
                                </p>
                            </div> 
                        </blockquote>
                        <!--/Theorem--> 
                        <P>
                            The expression <span v-katex="' D = f_{xx}f_{yy} - f_{xy}^2 '"></span> is known as the <span class="font-weight-bold">discriminant</span> of <span v-katex="' f'"></span>.
                        </P> 
                        <div class="p-2 pl-4 note note-success"> 
                            <p class="text-left">
                                <strong> Example (1)</strong><br>
                                Find and classify all the critical points of the function  
                                <span v-katex:display="'f(x, y) = x^2 + 4xy + 4x + 2y^2 - 8y + 3'"></span>
                                <strong>Solutions:</strong>
                                We start by evaluating the derivatives and equating them to zero to find the critical points. This leads to
                                <span v-katex:display="'\\begin{aligned} f_x &= 2 x + 4 y + 4 &= 0\label{ex1eqa} \\ f_y &= 4 x + 4 y - 8 &= 0\label{ex1eqb}\\end{aligned}'"></span>
                            </p>
                            
                        </div> 

                    </div>
                    <!--/Classifying Critical Points--> 
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
.headingUnd{
    border-bottom: 2px solid currentColor;
    display: inline-block;
    line-height: 0.85;
    text-shadow:
    2px 2px white,
    2px -2px white,
    -2px 2px white,
    -2px -2px white;
}

</style>