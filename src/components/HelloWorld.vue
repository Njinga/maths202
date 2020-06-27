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
        <section class="text-justify dark-grey-text mb-4">
            <h4 class="font-weight-bold pb-4 text-center"> Partial Derivatives</h4>
            <mdb-row>
                <!-- Choose appropriate mdb-col  -->
                <mdb-col text-justify w-responsive mx-auto m-3>

                    <h4 class=" h4 font-weight-bold pb-4 text-center shadow z-depth-5"> Application of partial derivatives</h4>
                    <br />
                    <br />
                    <p class="font-weight-bold text-center">
                        MS202<br/>
                        Marginal productivity (Cobb-Douglas)
                    </p>
                    <br/>
                    <p class="text-justify size20 red-text bg-grey-lighten-4">
                        Cobb-Douglas function
                    </p>
                   

                    <p class="blue-text">What is Cobb-Douglas equation?</p>
                    <div class="note note-primary shadow rounded border border-light z-depth-5">
                        <p class="ml-3 mr-3">
                            In economics, the Cobb-Douglas function is a  production function,
                            used to represent relationship between the amounts of two or more
                            inputs (particularly physical <strong>capital</strong> and <strong>labour</strong>)
                            and the amount of output that can be produced by those inputs.
                        </p>
                    </div>
                    <br />
                    <br />
                    <div>
                        In its most standard form for production of a single good with two factors,
                        the function is
                        <div v-katex:display="'f(x,y) = Ax^\\beta y^\\alpha '"></div>
                        <div>
                        -<span v-katex="'f (x,y)'"></span> is the total production<br/>
                        -<span v-katex="'x'"></span>  is the quantity of labour.<br/>
                        -<span v-katex="'y'"></span> is the quantity of capital.<br/>
                        -<span v-katex="'A'"></span> is a positive constant.<br/>
                        -<span v-katex="'\\beta'"></span> and <span v-katex="'\\alpha'"></span> are constants between 0 and 1.
                        </div>


                    </div>
                    <br />
                    <br/>
                    <p class="text-justify size20 red-text bg-grey-lighten-4">
                        Marginal Productivity
                    </p>
                    
                    
                    <p class="blue-text">What is marginal product?</p>
                    <div class="note note-primary shadow rounded border border-light z-depth-5">
                        <p class="ml-3 mr-3">
                            Marginal product is the change in total production, when there is an
                            infinitesimal change in the inputs. Marginal product is the first derivative
                            of the production function with respect to an input. The term <em>marginal</em> is
                            used because it measures the change of production with a small change of
                            either the capital or labour
                        </p>
                    </div>
                    <br/>
                    <br />
                    <div>
                        <p>
                            The marginal product of labour is defined as
                        </p>
                        <div v-katex:display="'\\frac{\\partial f}{\\partial x} '"></div>
                    </div>
                    <p>
                        and it measures the change of production with a small change of labour
                        Similarly, the marginal product of capital is defined as
                    </p>
                    <div v-katex:display="'\\frac{\\partial f}{\\partial y} '"></div>
                    <p>
                        and it measures the change of production with a small change of capital.
                    </p>
                    <br />
                    <div>
                        <p class="text-justify size20 red-text bg-grey-lighten-4">
                            Example on marginal productivity
                        </p>
                        
                        <p class="green-text">Example (1)</p>
                        <p>
                            A certain country's production is described by the function
                        </p>
                        <div v-katex:display="'f(x, y) = 1600 x^{\\frac{1}{4}} y^{\\frac{3}{4}}'"></div>
                        units, when <span v-katex="'x'"></span> units of labour and <span v-katex="'y'"></span> units of capital were used
                        <br /><br />
                        <ul style="list-style-type:lower-alpha;">

                            <li>
                                What is the marginal productivity of labour and the marginal
                                productivity of capital when the amounts spent on labour and capital are
                                81 units and 625 units,respectively?
                            </li>
                            <li>
                                Should the government prioritise capital investment over increased
                                spending on labour at this time in order enhance the country's
                                productivity?
                            </li>
                        </ul>
                        <br />
                        <br/>
                        <p class="text-justify size20 red-text bg-grey-lighten-4">
                            Finding marginal productivity of labour
                        </p>
                        
                        <p>
                            The marginal productivity of labour when the amounts spent on labour
                            and capital are <span v-katex="'x'"></span> and <span v-katex="'y'"></span> units, respectively, is computed from the partial
                            derivative of <span v-katex="'f'"></span> with respect to<span v-katex="'x'"></span>  as
                        </p>
                        <div v-katex:display="'\\frac{\\partial f}{\\partial x} = f_x(x,y) =  1600\\left(\\frac{1}{4}x^{-\\frac{3}{4}}\\right)y^{\\frac{3}{4}} = 400\\left(\\frac{y}{x}\\right)^{\\frac{3}{4}}'"></div>
                        <p>
                            When <span v-katex="'x = 81 '"></span> and <span v-katex="'y = 625'"></span> the required marginal productivity of labour is
                        </p>
                        <div v-katex:display="'f_x(81, 625) = 400\\left(\\frac{625}{81}\\right)^{\\frac{3}{4}} = 400\\left(\\frac{125}{27}\\right)^{\\frac{3}{4}} =  1851.85'"></div>
                        <p>
                            The marginal productivity of labour is 1851.85 units per unit increase in
                            labour expenditure (with capital expenditure held fixed at 625 units).
                        </p>
                    </div>
                    <br />
                    <br/>
                    <div>
                        <p class="text-justify size20 red-text bg-grey-lighten-4">
                            Finding marginal productivity of capital
                        </p>
                        
                        <p>
                            The marginal productivity of capital when the amounts spent on labour
                            and capital are <span v-katex="'x'"></span>  and <span v-katex="'y'"></span>  units, respectively,
                            is computed from the partial derivative of <span v-katex="'f'"></span>  with respect to <span v-katex="'y'"></span>  as
                        </p>
                        <div v-katex:display="'\\frac{\\partial f}{\\partial y} = f_y(x,y) =  1600x^{\\frac{1}{4}}\\left(\\frac{3}{4}x^{-\\frac{1}{4}}\\right) = 1200\\left(\\frac{x}{y}\\right)^{\\frac{1}{4}} '"></div>
                        <p>
                            When <span v-katex="'x = 81 '"></span> and <span v-katex="'y = 625'"></span> the required marginal productivity of capital is
                        </p>
                        <div v-katex:display="'f_y(81, 625) = 1200\\left(\\frac{81}{625}\\right)^{\\frac{1}{4}} = 1200\\left(\\frac{3}{5}\\right)^{\\frac{1}{4}} = 720'"></div>
                        <p>
                            The marginal productivity of capital is 720 units per unit increase in capital expenditure (with labour expenditure held fixed at 81 units).
                        </p>
                        <br/><br/>
                        <div>
                            <p class="text-justify size20 red-text bg-grey-lighten-4">
                                Concluding from results
                            </p>
                            The results are
                            <p class="ml-5">
                                Marginal productivity of labour = 1851.85<br />
                                Marginal productivity of capital = 720
                            </p>
                            The results indicate that a unit increase in labour expenditure results in a
                            greater increase in productivity than a unit increase in capital expenditure
                            would have.<br />

                            <p>
                                Therefore, the government can be advised to spend
                                more on labour rather than on capital.
                            </p>

                        </div>
                    </div>
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
    import 'katex/dist/katex.min.css';
    
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
    .size20 {
        font-size:20px;
        
    }

    .bg-grey-lighten-4 {
        background-color:#f5f5f5;
    }

</style>