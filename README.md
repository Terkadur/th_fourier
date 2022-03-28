# Tech House Fourier Series
A periodic complex-valued parametric function can be approximated by a Fourier series of complex exponential terms with specially chosen coefficients. In other words, if someone were to blow a weekend on modelling an image (say, for example, the Tech House logo) as a periodic complex-valued parametric function, then they would be able to use a Fourier series to trace out this image using a chain of epicycles (see the actual program to understand what this actually means beyond this confusing description). The more epicycles used, the more accurate the trace will become. Try turning up the "Number of Epicycles" slider to see this happen.

Note that the coefficients in the Fourier series are like the underlying DNA of your image, what distinguishes the Tech House logo from a drawing of human genitalea. Here are the first few of these coefficients in the case of the Tech House logo:

c(0) = -0.071 + 0.011i
c(1) = 0.172 + -0.072i
c(-1) = -0.193 + 0.003i
c(2) = -0.16 + -0.045i
c(-2) = 0.079 + 0.004i
c(3) = 0.098 + -0.022i
c(-3) = 0.018 + -0.039i
c(4) = -0.024 + -0.06i
c(-4) = -0.06 + 0.08i
c(5) = 0.046 + -0.005i
c(-5) = -0.117 + 0.07i

I weep for those who try and comprehend or use this shoddy-ass code. I wonder if there's anything "nice" hiding inside...
