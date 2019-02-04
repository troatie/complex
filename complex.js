module.exports.Complex = class Complex {

  constructor(re = 0, im = 0) {
    if (re.constructor.name == 'Complex') {
      return re;
    }

    this.re = re;
    this.im = im;
  }

  toString() {
    if (this.im == 0) {
      return this.re.toString();
    }

    if (this.re == 0) {
      return this.im.toString() + 'i';
    }

    return this.re.toString() + ' + ' + this.im.toString() + 'i';
  }

  // complex conjugate
  conj() {
    return new Complex(this.re, - this.im);
  }

  // absolute value / modulus / magnitude
  abs() {
    return Math.sqrt(this.re * this.re + this.im * this.im);
  }

  // argument / phase / angle
  arg() {
    if (this.equalTo(0)) {
      return undefined;
    }

    if (this.re < 0 && y == 0) {
      return Math.PI;
    }

    return 2 * Math.atan(this.im / (this.abs() + this.re));
  }

  // square root, returns the "positive" root
  sqrt() {
    let a = Math.sqrt((this.re + this.abs()) / 2);
    let b = Math.sign(this.im) * Math.sqrt((- this.re + this.abs()) / 2);

    return new Complex(a, b);
  }

  // exponent
  exp() {
    let e = Math.exp(this.re);
    return new Complex(
      e * Math.cos(this.im),
      e * Math.sin(this.im)
    );
  }

  // natural log
  log() {
    return new Complex(Math.log(this.abs()), this.arg());
  }

  // unary negation
  neg() {
    return new Complex(- this.re, - this.im);
  }

  // power
  pow(exp) {
    console.error('pow not implemented yet');
  }

  // compare two complex numbers
  equalTo(other) {
    other = new Complex(other);
    return this.re == other.re && this.im == other.im;
  }

  // addition
  add(other) {
    other = new Complex(other);
    return new Complex(
      this.re + other.re,
      this.im + other.im
    );
  }

  // subtraction
  sub(other) {
    other = new Complex(other);
    return new Complex(
      this.re - other.re,
      this.im - other.im
    );
  }

  // multiplication
  mult(other) {
    other = new Complex(other);
    return new Complex(
      this.re * other.re - this.im * other.im,
      this.re * other.im + this.im * other.re
    );
  }

  // division
  div(other) {
    other = new Complex(other);
    return this.mult(other.conj()).mult(1 / Math.pow(abs(other), 2));
  }

}
