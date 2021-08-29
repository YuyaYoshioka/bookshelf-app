package server

import (
	"github.com/gin-gonic/gin"
	"github.com/gin-contrib/cors"
	"github.com/YuyaYoshioka/bookshelf-app/server/controller"
)

func Init() {
	r := router()
	r.Run()
}

func router() *gin.Engine {
	r := gin.Default()
	r.Use(cors.Default())
	
	t := r.Group("/users")
	{
		ctrl := user.Controller{}
		t.POST("", ctrl.Create)
		t.GET("/:id", ctrl.Show)
	}

	return r
}
