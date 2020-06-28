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
                        <p class="font-weight-bold pb-3">Examples on functions of two variables <span v-katex="'\\bf{f(x,y)}'"></span></p>
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
                        <!--Example 1-->
                        <div class="p-2 pl-4 mb-2 note note-primary text-left"> 
                            <strong> Example (1)</strong><br>
                            Find and classify all the critical points of the function  
                            <div v-katex:display="'f(x, y) = x^2 + 4xy + 4x + 2y^2 - 8y + 3'"></div>
                            
                            <span v-katex="'\\textbf{Solutions:}'"></span>
                            We start by evaluating the derivatives and equating them to zero to find the critical points. This leads to
                            <div v-katex:display="'\\begin{aligned} \\tag{1} f_y = 4x + 4y - 8 = 0  \\end{aligned}'"></div>
                            <div v-katex:display="'\\begin{aligned} \\tag{2} f_x = 2x + 4y + 4 = 0  \\end{aligned}'"></div>
                            Eliminate <span v-katex="' y '"></span> by subtracting equation <span v-katex="' \\tag{1} '"></span> from equation <span v-katex="' \\tag{2} '"></span> to get
                            <div v-katex:display="'2x - 12 = 0,; \\Longrightarrow x = 6,'"></div>
                            Substituting <span v-katex="' x = 6 '"></span> in <span v-katex="' \\tag{1} '"></span> gives
                            <div v-katex:display="'2(6) + 4y + 4 = 16 + 4y = 0,; \\Longrightarrow y = -4'"></div>
                            The point <span v-katex="' (6, -4) '"></span> is the critical point of <span v-katex="' f(x,y '"></span>
                            To classify the critical points we evaluate the second derivatives and the discriminant D then we apply the second derivative test.

                            <br>
                            The second derivatives are

                            <div v-katex:display="'f_{xx} = 2, \\;\\; f_{yy} = 4,\\;\\; \\textrm{and} \\;\\;  f_{xy} = 4'"></div>
                            Since <span v-katex="' D < 0'"></span>, we conclude that the function has a saddle point at<span v-katex:display="' (6,-4) '"></span> 
                        </div> 
                        <!--/Example 1-->
                        
                        <!--Example 2 -->
                        <div class="p-2 pl-4 mb-2 note note-primary text-left"> 
                            <strong> Example (2)</strong><br>
                            Find and classify all the critical points of the function  
                            <div v-katex:display="'f(x, y) = x^3 - 12 x y + 8 y^3'"></div>
                            <span v-katex="'\\textbf{Solutions:}'"></span>
                            We start by evaluating the derivatives and equating them to zero to find the critical points. This leads to
                            <div v-katex:display="'\\begin{aligned} f_x = 3x^2 - 12 y = 3(x^2 - 4y) = 0  \\end{aligned}'"></div>
                            <div v-katex:display="'\\begin{aligned} f_y = 24y^2 - 12 x = 12(2y^2 - x) = 0  \\end{aligned}'"></div>

                            Thus we must solve <span v-katex="' x^2 = 4y '"></span> and <span v-katex="' x = 2y^2 '"></span>.
                            Sustituting <span v-katex="' x = 2y^2 '"></span> in the first equation gives 

                            <div v-katex:display="'(2y^2)^2 = 4(y),\\;\\;\\;\\textrm{or}\\;\\; 4y^4 - 4y =4y(y^3 - 1) = 0'"></div>

                            Solving gives <span v-katex="'y = 0'"></span> or <span v-katex="'y = 1'"></span>. When <span v-katex="'y = 0'"></span>, <span v-katex="'x = 0'"></span> and when <span v-katex="'y  = 1'"></span>, <span v-katex="' x = 2'"></span>. Thus the critical points are 
                            <div v-katex:display="'(0,0)\\;\\;\\;\\textrm{and}\\;\\;\\;(2,1)'"></div>  

                            To classify the critical points we evaluate the second derivatives and the discriminant <span v-katex="'D  = f_{xx} f_{yy} - f_{xy}^2'"></span> then we apply the second derivative test.

                            <br>
                            The derivatives are

                            <div v-katex:display="'f_{xx} = 6x, \\;\\; f_{yy} = 48y,\\;\\; \\textrm{and} \\;\\;  f_{xy} = -12'"></div>
                            <span v-katex="'\\textbf{Classifying  (0,0)}: \\newline'"></span>

                            At (0,0): <span v-katex="' f_{xx} = 6(0) = 0'"></span>, <span v-katex=" 'f_{yy} = 48 (0) = 0'"></span>, <span v-katex="'f_{xy} = -12'"></span>
                            <br>
                           Thus <span v-katex="'D = f_{xx} f_{yy} - f_{xy}^2 = (0)(0) - (-12)^2 = -144 < 0.'"></span>
                           <br>
                            Since <span v-katex="' D < 0'"></span>, we conclude that the function has a saddle point at <span v-katex="'(0,0)'"></span>
                            <br>
                            <br>

                            <span v-katex="'\\textbf{Classifying  (2,1)}: \\newline'"></span>
                            At (2,1): <span v-katex="' f_{xx} = 6(2) = 12'"></span>,<span v-katex="' f_{yy} = 48(1) = 48'"></span>, <span v-katex="' f_{xy} = -12'"></span> 
                            <br> 
                            Thus <span v-katex="'D = f_{xx} f_{yy} - f_{xy}^2 = (12)(48) -(-12)^2 = 432 > 0.'"></span>
                            <br>
                             Since <span v-katex="' D > 0 '"></span>and <span v-katex="'f_{xx} > 0'"></span> we conclude that the function has a 
                             local minimum at <span v-katex="'(2,1)'"></span>. The minimum of the function is <div v-katex:display="'f(2, 1) = (2)^3 - 12(2)(1) + 8(1)^3 = -8'"></div> 

                        </div> 
                        <!--/Example 2-->

                        <!--Example 3-->
                        <div class="p-2 pl-4 mb-2 note note-primary text-left"> 
                            <strong> Example (3)</strong><br>
                            Find and classify all the extreme values of the function 
                           <div v-katex:display="'f(x, y) = x^3 + 3 x^2 + y^3 - 3 y^2 - 8'"></div>
                            <span v-katex="'\\textbf{Solutions: }'"></span>
                            Equate derivatives to zero to get critical points.
                            <div v-katex:display="'\\begin{aligned} f_x &= 3 x^2 + 6 x = 3x(x + 2) = 0  \\end{aligned}'"></div>
                            <div v-katex:display="'\\begin{aligned} f_y &= 3 y^2 - 6 y = 3y(y - 2) = 0 \\end{aligned}'"></div>

                            From <span v-katex="'3x(x + 2) = 0'"></span>, we must have <span v-katex="'3x = 0'"></span> or <span v-katex="' x+2 = 0'"></span>. Thus
                            <div v-katex:display="'x = 0\\;\\;\\;  \\textrm{or}\\;\\;\\; x = -2'"></div> 
                            From <span v-katex="'3y(y - 2) = 0'"></span>, we must have <span v-katex="'3y = 0'"></span> or <span v-katex="' y - 2 = 0'"></span>. Thus
                            <div v-katex:display="'y = 0\\;\\;\\;  \\textrm{or}\\;\\;\\; y = -2'"></div> 

                            From <span v-katex="'x = 0'"></span> or <span v-katex="'x = -2'"></span> and <span v-katex="'y = 0'"></span> or <span v-katex="'y = 2'"></span>, we get the critical points
                            <div v-katex:display="'(-2,0),\\;\\; (-2,2),\\;\\; (0,0),\\;\\; (0,2)'"></div>

                            To classify the points we compute the discriminant $D$ at each critical point. First note that <span v-katex="'D = f_{xx}f_{yy}-f_{xy}^2'"></span> and 
                            <div v-katex:display="'f_{xx} = 6x + 6,\\;\\;\\; f_{yy} = 6y - 6,\\;\\; \\textrm{and}\\;\\;\\; f_{xy} = 0'"></div>
                            <br>
                            <br>

                            <span v-katex="'\\textbf{Classifying  (-2,0)}: \\newline'"></span>
                            At <span v-katex="'(-2,0)'"></span>: <span v-katex="'f_{xx} = 6(-2) + 6  = -6'"></span>, <span v-katex="'f_{yy} = 6(0) - 6  = -6, f_{xy} = 0\\newline'"></span>
                            Thus <span v-katex="'D = f_{xx} f_{yy} - f_{xy}^2 = (-6)(-6) - 0^2 = 36 > 0.'"></span>

                            Since <span v-katex="'D > 0'"></span> and <span v-katex="'f_{xx} < 0'"></span>, we conclude that at <span v-katex="'(-2,0)'"></span> the function has a local 
                            maximum. The maximum of the function is 
                            <br> 
                            <div v-katex:display="'f(-2, 0) = (-2)^3 + 3 (-2)^2 + (0)^3 - 3 (0)^2 - 8 = -4.'"></div>
                            <br>
                            <br>

                            <span v-katex="'\\textbf{Classifying  (-2,2)}: \\newline'"></span>
                            At <span v-katex="'(-2,2)'"></span>: <span v-katex="'f_{xx} = 6(-2) + 6  = -6'"></span>, <span v-katex="'f_{yy} = 6(2) - 6   = 6, f_{xy} = 0\\newline'"></span>
                            Thus <span v-katex="'D = f_{xx} f_{yy} - f_{xy}^2 = (-6)(-6) - 0^2 = -36 < 0.'"></span>
                            Since <span v-katex="'D < 0'"></span>, we conclude that the function has a saddle point at <span v-katex="'(-2,2)'"></span>
                            <br>
                            <br>

                            <span v-katex="'\\textbf{Classifying  (0,0)}: \\newline'"></span>
                            At <span v-katex="'(0,0)'"></span>: <span v-katex="'f_{xx} = 6(0) + 6  = 6'"></span>, <span v-katex="'f_{yy} = 6(0) - 6   = -6, f_{xy} = 0\\newline'"></span>
                            Thus <span v-katex="'D = f_{xx} f_{yy} - f_{xy}^2 = (6)(-6) - 0^2 = -36 < 0.'"></span>
                            Since <span v-katex="'D < 0'"></span>, we conclude that the function has a saddle point at <span v-katex="'(0,0)'"></span>
                            <br>
                            <br>

                            <span v-katex="'\\textbf{Classifying  (0,2)}: \\newline'"></span>
                            At <span v-katex="'(0,2)'"></span>: <span v-katex="'f_{xx} = 6(0) + 6  = 6'"></span>, <span v-katex="'f_{yy} = 6(2) - 6   = 6, f_{xy} = 0\\newline'"></span>
                            Thus <span v-katex="'D = f_{xx} f_{yy} - f_{xy}^2 = (6)(6) - 0^2 = 36 > 0.'"></span>
                            Since <span v-katex="'D > 0'"></span> and <span v-katex="'f_{xx} > 0'"></span> we conclude that at <span v-katex="'(0,2)'"></span> the function has a local minimum. The minimum of the function is 
                            <div v-katex:display="'f(0, 2) = (0)^3 + 3 (0)^2 + (2)^3 - 3 (2)^2 - 8 = -12'"></div> 
                        </div> 
                        <!--Example 3-->

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