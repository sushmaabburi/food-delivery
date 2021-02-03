function finalCost(){
            var nonveg = document.getElementById("non-veg").value;
            var veg = document.getElementById("veg").value;
            var Snack = document.getElementById("Snack").value;
            var specialdrink = document.getElementById("specialdrink").value;
            var deliveryArea = document.getElementById("Delivery_area").value;

            var all_food = (parseInt(nonveg)*7) + (parseInt(veg)*7) + (parseInt(Snack)*6) + (parseInt(specialdrink)*5) + (parseInt(deliveryArea)*3)
            document.getElementById("result").innerHTML = all_food;
        }
        function ok_result(){
            document.getElementById("okResult").style.display="block";
            document.getElementById("okResult").style.backgroundColor="#DCE775";
            document.getElementById("input_box").style.display="none";
        }