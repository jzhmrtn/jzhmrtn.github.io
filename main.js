pannellum.viewer('panorama', {   
    "default": {
        "firstScene": "circle",
        "author": "None",
        "sceneFadeDuration": 100,
        "autoLoad": true
    },

    "scenes": {
        "circle": {
            "title": "Hallway",
            "hfov": 110,
            "pitch": -3,
            "yaw": 0,
            "type": "equirectangular",
            "panorama": "Hall.jpg",
            "hotSpots": [
                {
                    "pitch": 2.1,
                    "yaw": 10.9,
                    "type": "scene",
                    "text": "Room 3103",
                    "sceneId": "house"
                }, 
                {
                    "pitch": 1.1,
                    "yaw": 9.9,
                    "type": "scene",
                    "text": "House 1",
                    "sceneId": "house1"
                }, 
                {
                    "pitch": 1.1,
                    "yaw": 8,
                    "type": "scene",
                    "text": "House 2",
                    "sceneId": "house2"
                }, 
                {
                    "pitch": 1.1,
                    "yaw": 6,
                    "type": "scene",
                    "text": "House 3",
                    "sceneId": "house3"
                }, 
                {
                    "pitch": 1.1,
                    "yaw": 4,
                    "type": "scene",
                    "text": "House 4",
                    "sceneId": "house4"
                }, 
                {
                    "pitch": 1.1,
                    "yaw": 2,
                    "type": "scene",
                    "text": "House 5",
                    "sceneId": "house5"
                }
            ]
        },

        "house": {
            "title": "Room 3103",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "3013.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": -37.1,
                    "type": "scene",
                    "text": "Hallway",
                    "sceneId": "circle",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        
        "house1": {
            "title": "House 1",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "inter.jpg",
            "hotSpots": [
                {
                    "pitch": 1.1,
                    "yaw": 10.9,
                    "type": "scene",
                    "text": "Home",
                    "sceneId": "circle"
                }
            ]
        },
        
        "house2": {
            "title": "House 2",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "christmas.jpg",
            "hotSpots": [
                {
                    "pitch": 1.1,
                    "yaw": 10.9,
                    "type": "scene",
                    "text": "Home",
                    "sceneId": "circle"
                }
            ]
        },
        
        "house3": {
            "title": "House 3",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "neon.jpg",
            "hotSpots": [
                {
                    "pitch": 1.1,
                    "yaw": 10.9,
                    "type": "scene",
                    "text": "Home",
                    "sceneId": "circle"
                }
            ]
        },
        
        "house4": {
            "title": "House 4",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "mint.jpg",
            "hotSpots": [
                {
                    "pitch": 1.1,
                    "yaw": 10.9,
                    "type": "scene",
                    "text": "Home",
                    "sceneId": "circle"
                }
            ]
        },
        
        "house5": {
            "title": "House 5",
            "hfov": 110,
            "pitch": -3,
            "yaw": 117,
            "type": "equirectangular",
            "panorama": "https://i.ibb.co/XxZ6NgJ/provence.jpg",
            "hotSpots": [
                {
                    "pitch": 1.1,
                    "yaw": 10.9,
                    "type": "scene",
                    "text": "Home",
                    "sceneId": "circle"
                }
            ]
        }
    }
});
