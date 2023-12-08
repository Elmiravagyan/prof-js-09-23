document.addEventListener('DOMContentLoaded', function() {
    const floors = document.querySelectorAll('.floor');
    const lift = document.getElementById('lift');

    floors.forEach(floor => {
        floor.addEventListener('click', function() {
            const selectedFloor = this.dataset.floor;
            moveLiftToFloor(selectedFloor);
        });
    });

    window.moveLift = function(direction) {
        const currentFloor = parseInt(lift.style.bottom) / 300 + 1;

        if (direction === 'up' && currentFloor < floors.length) {
            moveLiftToFloor(currentFloor + 1);
        } else if (direction === 'down' && currentFloor > 1) {
            moveLiftToFloor(currentFloor - 1);
        }
    };

    function moveLiftToFloor(targetFloor) {
        const currentFloor = parseInt(lift.style.bottom) / 300 + 1;
        const floorDifference = Math.abs(targetFloor - currentFloor);

        lift.style.bottom = `${(targetFloor - 1) * 300}px`;

        // Simulate lift movement delay
        setTimeout(() => {
            console.log(`Lift moved to Floor ${targetFloor}`);
        }, 500 * floorDifference);
    }
});
