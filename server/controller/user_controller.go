package user

import (
	"github.com/gin-gonic/gin"
	"github.com/YuyaYoshioka/bookshelf-app/server/service"
)

type Controller struct {}

func (pc Controller) Create(c *gin.Context) {
	var service user.Service
	user, err := service.CreateModel(c)

	if err != nil {
		c.AbortWithStatus(400)
	} else {
		c.JSON(201, user)
	}
}
