stickheader
===========

A Javascript to make a header div fixed.


Usage:

    <script>
        jQuery.stickheader( $('.header.floater'), 40, $('#logo a'), 22);
        /**
         * $('.header.floater')    =>    the element that you want to stick.
         * 40    =>    the pixel of the screen scroll to and then you want
    to stick the element above.
         * $('#logo a')    =>    the element that you want to slide in the 
    1st element
         * 22    =>    the pixel length/height that the element above slide
    with 1st element.it's should be less than 1st pixel value,or it will throw a bug.
         */		
    <script>


Demo:

    http://www.hexdata.cn


License(MIT License):    

    Copyright (C) 2013 enj0y # hexData

    Permission is hereby granted, free of charge, to any person obtaining a
	copy of this software and associated documentation files (the "Software
	"), to deal in the Software without restriction, including without limi
	tation the rights to use, copy, modify, merge, publish, distribute, sub
	license, and/or sell copies of the Software, and to permit persons to w
	hom the Software is furnished to do so, subject to the following condit
	ions:

    The above copyright notice and this permission notice shall be included
	in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABIL
	ITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT 
	SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES
	OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE
	, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
	OTHER DEALINGS IN THE SOFTWARE.
