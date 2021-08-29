package user

import (
	"github.com/gin-gonic/gin"
	"github.com/YuyaYoshioka/bookshelf-app/server/db"
	"github.com/YuyaYoshioka/bookshelf-app/server/entity"
)

type Service struct{}

type User entity.User

func (s Service) CreateModel(c *gin.Context) (User, error) {
	db := db.GetDB()
	var user User

	if err := c.BindJSON(&user); err != nil {
		return user, err
	}

	if err := db.Create(&user).Error; err != nil {
		return user, err
	}

	return user, nil
}

func (s Service) GetById(id string) (User, error) {
	db := db.GetDB()
	var user User

	if err := db.Where("id = ?", id).First(&user).Error; err != nil {
		return user, err
	}

	return user, nil
}

func (s Service) GetByName(name string) (User, error) {
	db := db.GetDB()
	var user User

	if err := db.Where("name = ?", name).First(&user).Error; err != nil {
		return user, err
	}

	return user, nil
}
